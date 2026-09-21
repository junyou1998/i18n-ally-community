import type { ExtensionModule } from '~/modules'
import { commands, lm, window, workspace } from 'vscode'
import { Log } from '~/utils'
import { Commands } from './commands'

/**
 * 列出编辑器中所有可用的语言模型，让用户选择并写入配置
 */
async function selectEditorLLMModel(): Promise<void> {
  if (!lm?.selectChatModels) {
    window.showErrorMessage('Language Model API is not available in this editor version.')
    return
  }
  const models = await lm.selectChatModels()
  if (!models.length) {
    window.showWarningMessage('No language models available. Please ensure Copilot or AI extension is installed.')
    return
  }
  const items = models.map(m => ({
    label: m.name,
    description: m.id,
    detail: `vendor: ${m.vendor} | family: ${m.family}`,
    modelId: m.id,
  }))
  const selected = await window.showQuickPick(items, {
    placeHolder: 'Select a language model for editor-llm translation engine',
    matchOnDescription: true,
    matchOnDetail: true,
  })
  if (!selected)
    return
  const config = workspace.getConfiguration('i18n-ally-community')
  await config.update('translate.editor-llm.model', selected.modelId, false)
  const engines = config.get<string[]>('translate.engines') ?? []
  if (!engines.includes('editor-llm')) {
    engines.push('editor-llm')
    await config.update('translate.engines', engines, false)
  }
  Log.info(`🤖 Editor LLM model set to: ${selected.label} (${selected.modelId})`)
  window.showInformationMessage(`Editor LLM model set to: ${selected.label}`)
}

export default <ExtensionModule> function () {
  return [
    commands.registerCommand(Commands.select_editor_llm_model, selectEditorLLMModel),
  ]
}

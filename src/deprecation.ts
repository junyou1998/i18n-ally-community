import type { ExtensionContext } from 'vscode'
import { commands, env, extensions, Uri, window } from 'vscode'
import i18n from '~/i18n'
import { Log } from '~/utils'
import { EXT_ID } from './meta'

export const SUCCESSOR_EXT_ID = 'lydanne.i18n-ally-next'

const SUCCESSOR_MARKETPLACE_URL = `https://marketplace.visualstudio.com/items?itemName=${SUCCESSOR_EXT_ID}`
const README_URL = 'https://github.com/junyou1998/i18n-ally-community#readme'
const DISMISSED_STATE_KEY = 'deprecation.dismissed'

export function isSuccessorInstalled() {
  return !!extensions.getExtension(SUCCESSOR_EXT_ID)
}

async function promptUninstall() {
  const uninstall = i18n.t('deprecation.uninstall_and_reload')
  const choice = await window.showInformationMessage(i18n.t('deprecation.successor_installed'), uninstall)
  if (choice !== uninstall)
    return

  await commands.executeCommand('workbench.extensions.uninstallExtension', EXT_ID)
  await commands.executeCommand('workbench.action.reloadWindow')
}

async function installSuccessor() {
  try {
    await commands.executeCommand('workbench.extensions.installExtension', SUCCESSOR_EXT_ID)
  }
  catch (error) {
    Log.error(error)
    window.showErrorMessage(i18n.t('deprecation.install_failed'))
    await env.openExternal(Uri.parse(SUCCESSOR_MARKETPLACE_URL))
    return
  }
  await promptUninstall()
}

export async function promptMigration(ctx: ExtensionContext, successorInstalled: boolean) {
  if (successorInstalled)
    return promptUninstall()

  if (ctx.globalState.get<boolean>(DISMISSED_STATE_KEY))
    return

  const install = i18n.t('deprecation.install_successor')
  const learnMore = i18n.t('deprecation.learn_more')
  const dismiss = i18n.t('deprecation.dont_show_again')
  const choice = await window.showWarningMessage(i18n.t('deprecation.message'), install, learnMore, dismiss)

  if (choice === install)
    await installSuccessor()
  else if (choice === learnMore)
    await env.openExternal(Uri.parse(README_URL))
  else if (choice === dismiss)
    await ctx.globalState.update(DISMISSED_STATE_KEY, true)
}

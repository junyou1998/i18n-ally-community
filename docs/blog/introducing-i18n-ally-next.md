# Introducing i18n Ally Next — A Modern i18n DX for VS Code

<p style="color:#999;font-size:14px">2025-02-14 · Lydanne</p>

> **Historical note:** This article was written by Lydanne for the upstream **i18n Ally Next** project and is preserved here for historical context. It does not represent an endorsement of i18n Ally Community.

> Internationalization (i18n) is one of those things in frontend development that looks simple but quickly becomes painful. Translation files scattered everywhere, typos in key names only discovered at runtime, new languages requiring manual completion one by one… If this resonates with you, this article is for you.

## Why i18n Ally Next?

[i18n Ally](https://github.com/lokalise/i18n-ally) is one of the most popular i18n extensions in the VS Code ecosystem, created by [@antfu](https://github.com/antfu). It provides inline annotations, translation management, string extraction, and many other powerful features that greatly improve the i18n development experience.

However, over time, maintenance of the original project has slowed down. The community has accumulated many unresolved Issues and PRs, and support for modern frameworks (such as Next-intl, Svelte 5) has lagged behind. More critically — **the original project has no documentation site**. All usage instructions are scattered across the README and Wiki, making onboarding costly for new users.

**i18n Ally Next** was born in this context — we forked the original project and, while preserving all classic features, continue to fix bugs, add new features, improve performance, and **built a complete documentation system from scratch**.

## Why Documentation Matters

The original i18n Ally is powerful, but has a fatal flaw: **you don't know what it can do**.

Many developers only use inline annotations after installation, completely unaware of the review system, custom frameworks, regex matching, path matching, and other advanced features. This isn't the user's fault — it's a documentation problem.

The i18n Ally Next documentation site reorganizes content across several dimensions:

### 🧱 Structured Guide System

- **[Getting Started](/guide/getting-started)** — From installation to your first inline annotation in 5 minutes
- **[Supported Frameworks](/guide/supported-frameworks)** — Complete list of 25+ supported frameworks and their auto-detection mechanisms
- **[Locale Formats](/guide/locale-formats)** — JSON, YAML, JSON5, PO, Properties, FTL… usage and notes for each format
- **[Namespace](/guide/namespace)** — Essential translation file organization for large projects
- **[Extraction](/guide/extraction)** — Complete workflow from hard-coded strings to i18n keys
- **[Review System](/guide/review)** — Quality assurance for team translation collaboration
- **[Machine Translation](/guide/translation)** — Configuration and comparison of 8 translation engines

### 🏗️ Framework Best Practices

Different frameworks have vastly different i18n approaches. We've written dedicated best practice guides for each major framework:

- **[Vue I18n](/guide/frameworks/vue)** — SFC `<i18n>` blocks, Composition API, Nuxt I18n
- **[React & Next.js](/guide/frameworks/react)** — react-i18next, Next-intl, Next-international
- **[Angular](/guide/frameworks/angular)** — ngx-translate, Transloco
- **[Svelte, Laravel & Rails](/guide/frameworks/others)** — Dedicated configuration examples
- **[Custom Framework](/guide/frameworks/custom)** — From zero configuration to fully working setup

### 📋 Complete Configuration Reference

Every configuration option includes: type, default value, usage scenario description, and code examples. No more guessing what a setting does.

- **[settings.json Configuration](/config/settings)** — Complete reference for 100+ configuration options
- **[Custom Framework Configuration](/config/custom-framework)** — Detailed explanation of every YAML field

## New Features in Detail

### 🤖 Editor LLM: Zero-Config AI Translation

This is one of the most innovative features of i18n Ally Next. It directly calls your editor's built-in language model for translation — **no API key needed, no extra configuration**.

```jsonc
{ "i18n-ally-next.translate.engines": ["editor-llm"] }
```

It automatically detects your editor environment:

- **VS Code** — Calls GitHub Copilot
- **Cursor** — Calls Cursor's built-in model
- **Windsurf** — Calls Windsurf's built-in model

Even more powerful, Editor LLM supports **batch translation**. When translating multiple keys, it merges translation requests for the same language pair into a single API call, processing them in JSON format — dramatically improving speed and reducing token consumption.

You can also specify a model:

```jsonc
{ "i18n-ally-next.translate.editor-llm.model": "gpt-4o" }
```

### 🦙 Ollama: Fully Offline Local Translation

For teams with data security requirements, the Ollama engine lets you use locally deployed LLMs for translation — **data never leaves your machine**.

```jsonc
{
  "i18n-ally-next.translate.engines": ["ollama"],
  "i18n-ally-next.translate.ollama.apiRoot": "http://localhost:11434",
  "i18n-ally-next.translate.ollama.model": "qwen2.5:latest"
}
```

It calls through the OpenAI-compatible API, supporting any model available on Ollama. The translation prompt is specifically optimized to correctly preserve placeholders like `{0}`, `{name}`, and `{{variable}}`.

### 🔌 8 Translation Engines, Full Coverage

| Engine | Strengths | Best For |
| --- | --- | --- |
| **Google** | Free, wide language coverage | Daily development |
| **Google CN** | Directly accessible in China | Chinese developers |
| **DeepL** | Best translation quality | User-facing formal translations |
| **OpenAI** | Flexible, custom API endpoints | High quality + customization |
| **Ollama** | Fully offline, data secure | Enterprise intranet environments |
| **Editor LLM** | Zero config, batch translation | Rapid iteration |
| **Baidu Translate** | Chinese API, optimized for Chinese | Chinese projects |
| **LibreTranslate** | Open-source self-hosted | Full autonomy |

Engines can be configured as fallback chain:

```jsonc
{ "i18n-ally-next.translate.engines": ["editor-llm", "deepl", "google"] }
```

### 🕵️ Stale Translation Detection

This is an easily overlooked but critically important feature. When source language text changes, translations in other languages may be outdated — but you won't receive any warning.

i18n Ally Next's Stale Translation Check solves this:

1. The extension records a **source language snapshot** for each key
2. When you run the check command, it compares snapshots with current values
3. When changes are found, you can choose:
   - **Retranslate all** — Send all stale translations to the translation engine in one click
   - **Review one by one** — Inspect each change and decide whether to retranslate
   - **Update snapshot only** — Confirm current translations are still valid, update the baseline

This means your translations will never "silently expire".

### 🔍 Project-wide Scan & Batch Extraction

Single-file hard-coded detection is useful, but real i18n migration requires **project-level** capability.

The "Scan and Extract All" command can:

1. Scan all supported files in the project (configurable via glob patterns)
2. Detect hard-coded strings in each file
3. Display a scan summary (N files, M hard-coded strings)
4. After confirmation, **automatically batch extract** — generating key names and writing to locale files

```jsonc
{
  "i18n-ally-next.extract.scanningInclude": ["src/**/*.{ts,tsx,vue}"],
  "i18n-ally-next.extract.scanningIgnore": ["src/generated/**"],
  "i18n-ally-next.extract.keygenStrategy": "slug",
  "i18n-ally-next.extract.keygenStyle": "camelCase"
}
```

### 📝 Review System (v2)

Translation is a team effort. i18n Ally Next includes a built-in Review System that supports:

- **Review translations** one by one, marking them as "approved" or "needs changes"
- **Leave comments** for asynchronous collaboration with team members
- Review data is stored as JSON in your project, **version-controllable**
- Translation results can be saved as **candidates** (`translate.saveAsCandidates`), only written after review approval

This means translation quality is no longer a black box — every translation has a traceable history.

### 🚀 Translate All Missing Keys

Added a new language to your project? No need to translate keys one by one. The "Translate All Missing" command can:

1. Select one or more target languages (shows current translation progress percentage)
2. Automatically collect all **missing keys** and **empty-value keys**
3. Simultaneously detect **stale translations** (combined with stale translation check)
4. Send everything to the translation engine in one click

Combined with parallel translation control, even large projects finish quickly:

```jsonc
{
  "i18n-ally-next.translate.parallels": 5,
  "i18n-ally-next.translate.overrideExisting": false
}
```

### 🖥️ Visual Translation Editor

i18n Ally Next includes a built-in Webview translation editor panel, providing a more intuitive editing experience than JSON files:

- Open via command palette or hover menu
- Supports **current file mode** (only shows keys used in the current file) and **standalone mode** (browse all keys)
- Real-time display of translations in all languages, edit directly
- Integrates with the review system, showing comments and translation candidates
- Auto-refreshes on configuration changes

```jsonc
// Prefer opening the editor over inline editing on hover
{ "i18n-ally-next.editor.preferEditor": true }
```

### 🧭 Key Navigation

Quickly jump between translation key usages in your code:

- **Next usage** (`Ctrl+Alt+→`) — Jump to the next translation key in the current file
- **Previous usage** (`Ctrl+Alt+←`) — Jump to the previous translation key
- Syncs with the Webview editor — navigation automatically updates the editor panel

### 📊 Usage Report & Key Management

The extension analyzes the usage of all translation keys in your project, generating three categories:

- **Active keys** — Keys currently used in code
- **Idle keys** — Keys defined but not used in code (possibly deprecated)
- **Missing keys** — Keys referenced in code but not present in locale files

Built around these reports, a series of key management operations are available:

| Operation | Description |
| --- | --- |
| **Duplicate Key** | Copy all language translations of a key to a new key path |
| **Fulfill Missing Keys** | Batch-create missing empty keys for all languages (for later translation) |
| **Mark as In Use** | Manually mark a key as "in use" to prevent false idle reports (supports glob patterns) |
| **Refresh Usage Report** | Re-scan code to update key usage status |

### 🔑 Smart Key Generation

When extracting hard-coded strings to i18n keys, the key name generation strategy is highly configurable:

| Config | Description | Example |
| --- | --- | --- |
| `extract.keygenStrategy` | Strategy: `slug` (default), `random`, `empty`, `source` | `"hello-world"` / `"aB3kX9"` |
| `extract.keygenStyle` | Naming style: `default`, `camelCase`, `PascalCase`, `snake_case`, etc. | `"helloWorld"` |
| `extract.keyPrefix` | Key prefix, supports `{fileName}` placeholder | `"home.helloWorld"` |
| `extract.keyMaxLength` | Maximum key length | Truncates long slugs |

```jsonc
{
  "i18n-ally-next.extract.keygenStrategy": "slug",
  "i18n-ally-next.extract.keygenStyle": "camelCase",
  "i18n-ally-next.extract.keyPrefix": "{fileNameWithoutExt}.",
  "i18n-ally-next.extract.keyMaxLength": 50
}
```

### 📂 Batch Extract (Context Menu)

Beyond project-wide scanning, you can also batch extract from the **file explorer context menu** on selected files or folders:

- Select multiple files/folders, right-click → "Extract Hard Strings (Batch)"
- Folders are automatically scanned recursively
- Files in `.gitignore` are automatically skipped
- Each file is detected and extracted independently

### 🔧 DeepL Usage Query

When using the DeepL translation engine, you can check your API usage at any time:

- Run `i18n Ally Next: DeepL Usage` from the command palette
- Shows used character count and total quota

### 🤖 Interactive LLM Model Selection

When using the Editor LLM engine, you can interactively select a model via command:

- Run `i18n Ally Next: Select Editor LLM Model` from the command palette
- Lists all available models (name, ID, vendor, family)
- After selection, automatically writes to config and adds `editor-llm` to the translation engine list

## Custom Framework: Support Any i18n Solution

This is one of the most flexible features of i18n Ally Next. No matter what i18n library you use — even a team-built proprietary solution — you can make the extension fully support it through a single YAML configuration file.

### Why Custom Framework?

Built-in frameworks cover 25+ mainstream solutions, but reality always has exceptions:

- Company-internal i18n utility functions
- Non-standard translation function names (e.g. `__()`, `lang()`, `msg()`)
- Emerging frameworks not yet built-in
- Need to match multiple call patterns simultaneously

### How to Configure?

Create `.vscode/i18n-ally-next-custom-framework.yml` at your project root:

```yaml
# Specify which file types to activate for
languageIds:
  - typescript
  - typescriptreact
  - vue

# Regex to match translation function calls, {key} is the placeholder
usageMatchRegex:
  - "\\Wt\\(\\s*['\"`]({key})['\"`]"
  - "\\W\\$t\\(\\s*['\"`]({key})['\"`]"
  - "\\Wi18n\\.t\\(\\s*['\"`]({key})['\"`]"

# Extract refactor templates, $1 represents the key name
refactorTemplates:
  - "t('$1')"
  - "{t('$1')}"

# Namespace support
namespace: true
namespaceDelimiter: ":"

# Scope range detection (e.g. React useTranslation hook)
scopeRangeRegex: "useTranslation\\(['\"](.+?)['\"]\\)"

# Whether to disable all built-in frameworks
monopoly: false
```

### What Are Scope Ranges?

`scopeRangeRegex` is an extremely practical feature. Using React as an example:

```tsx
const { t } = useTranslation("settings")

t("title")        // → automatically resolves to "settings.title"
t("theme.dark")   // → automatically resolves to "settings.theme.dark"
```

The extension automatically divides scope ranges based on regex matches — from the match position to the next match (or end of file). All `t()` calls within a scope are automatically prefixed with the namespace.

### Hot Reload

After modifying the YAML config file, **no need to restart VS Code** — the extension automatically detects file changes and reloads. This makes debugging regex patterns very convenient — edit and see results immediately.

## Quick Start

### Installation

Search for **i18n Ally Next** in the VS Code Extensions panel, or install from:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next)
- [Open VSX Registry](https://open-vsx.org/extension/lydanne/i18n-ally-next)

### Minimal Configuration

For most projects, you only need two steps:

**1. Specify locale file paths**

```jsonc
// .vscode/settings.json
{
  "i18n-ally-next.localesPaths": ["src/locales"],
  "i18n-ally-next.sourceLanguage": "en"
}
```

**2. Open your project and start using it**

The extension auto-detects your i18n framework (Vue I18n, react-i18next, etc.) — no extra configuration needed.

Open any file containing translation keys and you'll see:

- 🏷️ **Inline annotations** next to translation keys showing the translated value
- 🌐 **Hover** over a key to see translations in all languages
- ✏️ **Click to edit** translations directly
- 📊 **Sidebar** showing translation progress and missing items

## Migrating from i18n Ally

If you're currently using the original i18n Ally, migration is straightforward:

1. Uninstall `i18n Ally`
2. Install `i18n Ally Next`
3. Replace the `i18n-ally.` prefix with `i18n-ally-next.` in your `settings.json`

All configuration options remain compatible — no other changes needed.

## Final Thoughts

Internationalization shouldn't be painful. The goal of i18n Ally Next is to make i18n a natural part of your development workflow — see translations while coding, check for missing items before committing, get automatic alerts when source text changes, and have a traceable review process for collaboration.

We're not just building an extension — we're building a **complete i18n development toolchain**: from documentation to configuration, from detection to extraction, from translation to review, every step has a corresponding solution.

If you find this project useful:

- ⭐ Give us a Star on [GitHub](https://github.com/lydanne/i18n-ally-next)
- 🐛 Submit an [Issue](https://github.com/lydanne/i18n-ally-next/issues) to report problems
- 💬 Share it with your team and friends
- 📖 Read the [full documentation](https://lydanne.github.io/i18n-ally-next/guide/getting-started) to get started

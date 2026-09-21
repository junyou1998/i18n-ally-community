<p align="center">
<img src="https://github.com/junyou1998/i18n-ally-community/blob/main/res/logo.png?raw=true" alt="i18n Ally Community" width="128"/>
</p>

<h1 align="center">i18n Ally Community</h1>

<p align="center">
<b>All in one i18n extension for VS Code</b>
</p>

<p align="center">
English | <a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.zh-CN.md">简体中文</a> | <a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.zh-TW.md">繁體中文</a>
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/v/junyou1998.i18n-ally-community?color=6366f1&amp;label=Marketplace&logo=visual-studio-code" alt="VS Code Marketplace" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/d/junyou1998.i18n-ally-community?color=06b6d4" alt="Downloads" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/i/junyou1998.i18n-ally-community?color=10b981" alt="Installs" /></a>
<a href="https://github.com/junyou1998/i18n-ally-community"><img alt="GitHub stars" src="https://img.shields.io/github/stars/junyou1998/i18n-ally-community?style=social"></a>
</p>

---

> **Community fork:** This extension is independently published and maintained by the community. It is not affiliated with the upstream `i18n-ally-next` maintainers. This extension uses its own `i18n-ally-community.*` settings and command namespace, so it can be installed alongside the upstream extension without sharing configuration.

## Features

- **🌍 Inline Annotations** — See translations directly in your code
- **🔎 Reverse Lookup by Translation Value** — Search the text shown in your application to find its translation key across loaded locales, preview matches, and jump to source usages or the locale definition
- **🔍 Hover Preview** — Preview all translations with hover, edit in one click
- **📦 Extract Hard Strings** — Detect and extract hard-coded strings to locale files
- **🤖 Machine Translation** — Google, DeepL, Baidu, OpenAI, and Editor built-in LLM (Cursor/Windsurf/VSCode Copilot)
- **🗂 Namespace** — Organize translations with `t("ns:key")` style
- **📝 Review System** — Built-in translation review and collaboration
- **🧩 30+ Frameworks** — Vue, React, Angular, Svelte, Flutter, and more
- **🎨 Custom Framework** — Define your own framework via YAML config
- **⚡ Translate All Missing** — One-click translate all missing and stale keys for any locale
- **🕐 Stale Translation Detection** — Detect outdated translations when source text changes, re-translate one by one or all at once
- **🔎 Scan & Extract All** — Scan entire project for hard-coded strings and batch extract them into i18n keys
- **🧠 Editor LLM Translation** — Auto-detect VSCode and use the built-in LLM for translation with batch support

## Reverse Lookup by Translation Value

When you know the translated text but not its key, run **i18n Ally Community: Search translation by value** or click the globe and magnifier icon.

- Search all loaded locale files, or limit the search to the current file.
- Search with a complete value or partial text; English matching is case-insensitive.
- Preview the matching key, locale, translated text, and source references before navigating.
- Jump to source usages, or go directly to the locale definition when no usage exists.
- Resolve namespace-aware keys and show usage counts through CodeLens and locale-key hovers.

See the [Search by translation value guide](https://junyou1998.github.io/i18n-ally-community/guide/search-by-value) for details.

## Quick Start

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["src/locales"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.displayLanguage": "zh-CN"
}
```

> The framework is auto-detected from your `package.json`. See [Supported Frameworks](#supported-frameworks) for the full list.

## Screenshots

<h4 align="center">Inline Annotations</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/annotation.png?raw=true)

<h4 align="center">Hover and Direct Actions</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/hover.png?raw=true)

<h4 align="center">Extract Translations from Code</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/extract.png?raw=true)

## Supported Frameworks

| Category | Frameworks |
| --- | --- |
| **Vue** | Vue I18n, Vue SFC, Fluent Vue |
| **React** | React I18next, React Intl, Lingui |
| **Next.js** | next-intl, next-i18next, next-translate, next-international |
| **Angular** | ngx-translate, Transloco |
| **Others** | Svelte, Ember, i18n-tag, Polyglot, Globalize, UI5 |
| **Mobile** | Flutter |
| **Backend** | Laravel, Ruby on Rails, PHP Gettext |
| **Tools** | VS Code Extension, Chrome Extension, Jekyll |
| **Custom** | [Define your own framework](https://junyou1998.github.io/i18n-ally-community/guide/custom-framework) |

## Inline Annotation Mode

By default, translations are shown as inline annotations after the key. You can customize this behavior:

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.annotationInPlace": true,
  "i18n-ally-community.annotationInPlaceFullMatch": true
}
```

| Setting | Effect |
| --- | --- |
| `annotationInPlace: false` | `t('key')` · translated text |
| `annotationInPlace: true` | `t(`translated text`)` — hides the key only |
| `annotationInPlaceFullMatch: true` | translated text — hides the entire function call |

![Annotation Full Match Mode](./res/annotation-full-match.png)

> **Note:** When `annotationInPlaceFullMatch` is enabled, moving the cursor to the line will restore the original code for editing. The `annotationMaxLength` limit is automatically disabled in this mode, so translations are shown in full without truncation.

The translated text color in full match mode defaults to `#ce9178` (string color in Dark+ theme). You can customize it:

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.theme.annotationInPlaceFullMatch": "#ce9178" // Dark theme
  // "i18n-ally-community.theme.annotationInPlaceFullMatch": "#a31515" // Light theme
}
```

## Optional Dependencies

Some advanced features require additional packages to be installed **in your project**:

| Feature | When needed | Install |
| --- | --- | --- |
| **Vue SFC `<i18n>` block** | Using inline `<i18n>` blocks in `.vue` files | `npm i -D vue-template-compiler vue-i18n-locale-message` |
| **Fluent Vue SFC** | Using Fluent syntax in `.vue` SFC files | `npm i -D fluent-vue-cli` |

> **Note:** If you use standalone locale files (e.g. `locales/en.json`), no extra dependencies are needed. The above packages are only required for SFC inline translation blocks.

## Documentation

📖 **[Full Documentation](https://junyou1998.github.io/i18n-ally-community/)** — Getting started, configuration, namespace, custom framework, and more.

## 🌍 Multilingual Support

This extension itself supports i18n. It auto-matches your VS Code display language.

| Language | Language | Language |
| --- | --- | --- |
| English | 简体中文 | 繁體中文 |
| 日本語 | 한국어 | Deutsch |
| Français | Español | Português (BR) |
| Русский | Українська | Türkçe |
| Nederlands | Svenska | Norsk |
| Magyar | ภาษาไทย | |

> Want to help translate? See [Contributing](https://junyou1998.github.io/i18n-ally-community/guide/faq).

## ❤️ Credits

This extension was originally inspired by [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n). Vue SFC support is powered by [kazupon/vue-i18n-locale-message](https://github.com/kazupon/vue-i18n-locale-message).

### Contributors

<a href="https://github.com/junyou1998/i18n-ally-community/graphs/contributors"><img src="https://contrib.rocks/image?repo=junyou1998/i18n-ally-community" /></a>

## 📄 License

This is an independent community fork. Copyright and license notices for upstream contributors are retained in [`LICENSE`](./LICENSE).

[MIT](./LICENSE) © 2026 [junyou1998](https://github.com/junyou1998) | MIT © 2025-PRESENT [Lydanne](https://github.com/lydanne) | MIT © 2021-2024 [Lokalise](https://github.com/lokalise) | MIT © 2019-2020 [Anthony Fu](https://github.com/antfu) | MIT © 2018-2019 [think2011](https://github.com/think2011)

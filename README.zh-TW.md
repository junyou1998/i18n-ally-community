<p align="center">
<img src="https://github.com/junyou1998/i18n-ally-community/blob/main/res/logo.png?raw=true" alt="i18n Ally Community" width="128"/>
</p>

<h1 align="center">i18n Ally Community</h1>

<p align="center">
<b>VS Code 全方位國際化擴充套件</b>
</p>

<p align="center">
<a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.md">English</a> | <a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.zh-CN.md">简体中文</a> | 繁體中文
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/v/junyou1998.i18n-ally-community?color=6366f1&amp;label=Marketplace&logo=visual-studio-code" alt="VS Code Marketplace" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/d/junyou1998.i18n-ally-community?color=06b6d4" alt="Downloads" /></a>
<a href="https://marketplace.visualstudio.com/items?itemName=junyou1998.i18n-ally-community"><img src="https://img.shields.io/visual-studio-marketplace/i/junyou1998.i18n-ally-community?color=10b981" alt="Installs" /></a>
<a href="https://github.com/junyou1998/i18n-ally-community"><img alt="GitHub stars" src="https://img.shields.io/github/stars/junyou1998/i18n-ally-community?style=social"></a>
</p>

---

> **社群版本說明：** 此擴充套件由社群獨立發布與維護，與上游 `i18n-ally-next` 維護者沒有關聯。本版本使用獨立的 `i18n-ally-community.*` 設定與指令命名空間，因此可以與上游擴充套件並存，不會共用設定。

## 功能特色

- **🌍 行內註解** — 直接在程式碼中查看翻譯內容
- **🔎 依翻譯文字反查 Key** — 搜尋應用程式畫面中的翻譯文字，在已載入的語系檔中找到對應的 key，預覽匹配結果，並跳轉到程式碼引用或語系定義
- **🔍 懸浮預覽** — 透過懸浮提示預覽所有翻譯，一鍵編輯
- **📦 提取硬編碼字串** — 偵測硬編碼字串並提取到語系檔
- **🤖 機器翻譯** — 支援 Google、DeepL、百度、OpenAI，以及編輯器內建的 LLM（Cursor/Windsurf/VS Code Copilot）
- **🗂 命名空間** — 支援 `t("ns:key")` 形式的命名空間組織方式
- **📝 翻譯審閱系統** — 內建翻譯審閱與團隊協作功能
- **🧩 30+ 種框架** — Vue、React、Angular、Svelte、Flutter 等
- **🎨 自訂框架** — 透過 YAML 設定檔定義自己的框架
- **⚡ 翻譯所有缺少項目** — 一鍵翻譯指定語系中所有缺少或過期的 key
- **🕐 過期翻譯偵測** — 偵測來源文字變更後的過期翻譯，可逐一或批次重新翻譯
- **🔎 全專案掃描與提取** — 掃描整個專案的硬編碼字串，批次提取為 i18n key
- **🧠 編輯器 LLM 翻譯** — 自動偵測 VS Code 環境，使用內建 LLM 進行翻譯並支援批次處理

## 依翻譯文字反查 Key

當你知道畫面上顯示的翻譯文字，卻不知道對應的 key 時，可以執行 **i18n Ally Community: Search translation by value**，或點擊地球加放大鏡圖示。

- 搜尋所有已載入的語系檔，也可以限制在目前檔案中搜尋。
- 支援完整文字或部分文字；英文比對不區分大小寫。
- 跳轉前可預覽 key、語系、翻譯文字與程式碼引用。
- 有程式碼引用時可直接跳到使用位置；沒有引用時則跳到語系檔定義。
- 支援含命名空間的 key，並透過 CodeLens 與語系 key 的懸浮提示顯示引用數量。

詳細說明請參閱[依翻譯文字反查 Key 指南](https://junyou1998.github.io/i18n-ally-community/guide/search-by-value)。

## 快速開始

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["src/locales"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.displayLanguage": "zh-TW"
}
```

> 擴充套件會從 `package.json` 自動偵測框架。完整清單請參閱[支援的框架](#支援的框架)。

## 螢幕截圖

<h4 align="center">行內註解</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/annotation.png?raw=true)

<h4 align="center">懸浮預覽與快速操作</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/hover.png?raw=true)

<h4 align="center">從程式碼提取翻譯</h4>

![](https://github.com/junyou1998/i18n-ally-community/blob/main/screenshots/extract.png?raw=true)

## 支援的框架

| 類別 | 框架 |
| --- | --- |
| **Vue** | Vue I18n、Vue SFC、Fluent Vue |
| **React** | React I18next、React Intl、Lingui |
| **Next.js** | next-intl、next-i18next、next-translate、next-international |
| **Angular** | ngx-translate、Transloco |
| **其他** | Svelte、Ember、i18n-tag、Polyglot、Globalize、UI5 |
| **行動端** | Flutter |
| **後端** | Laravel、Ruby on Rails、PHP Gettext |
| **工具** | VS Code 擴充套件、Chrome 擴充套件、Jekyll |
| **自訂** | [定義自己的框架](https://junyou1998.github.io/i18n-ally-community/guide/custom-framework) |

## 行內註解模式

預設情況下，翻譯文字會以行內註解的形式顯示在 key 後方。你可以自訂顯示方式：

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.annotationInPlace": true,
  "i18n-ally-community.annotationInPlaceFullMatch": true
}
```

| 設定 | 效果 |
| --- | --- |
| `annotationInPlace: false` | `t('key')` · 翻譯文字 |
| `annotationInPlace: true` | `t(`翻譯文字`)` — 只隱藏 key |
| `annotationInPlaceFullMatch: true` | 翻譯文字 — 隱藏整個函式呼叫 |

![行內註解完整比對模式](./res/annotation-full-match.png)

> **注意：** 啟用 `annotationInPlaceFullMatch` 後，將游標移到該行會自動恢復原始程式碼，方便編輯。此模式會自動停用 `annotationMaxLength` 限制，因此翻譯文字會完整顯示，不會被截斷。

完整比對模式中的翻譯文字預設使用 `#ce9178`（Dark+ 主題的字串顏色）。你可以自訂顏色：

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.theme.annotationInPlaceFullMatch": "#ce9178" // 深色主題
  // "i18n-ally-community.theme.annotationInPlaceFullMatch": "#a31515" // 淺色主題
}
```

## 選用相依套件

部分進階功能需要在**你的專案中**額外安裝相依套件：

| 功能 | 使用情境 | 安裝指令 |
| --- | --- | --- |
| **Vue SFC `<i18n>` 區塊** | 在 `.vue` 檔案中使用行內 `<i18n>` 翻譯區塊 | `npm i -D vue-template-compiler vue-i18n-locale-message` |
| **Fluent Vue SFC** | 在 `.vue` SFC 檔案中使用 Fluent 語法 | `npm i -D fluent-vue-cli` |

> **注意：** 如果你使用獨立的語系檔（例如 `locales/en.json`），不需要安裝任何額外相依套件。以上套件只在使用 SFC 行內翻譯區塊時才需要。

## 文件

📖 **[完整文件](https://junyou1998.github.io/i18n-ally-community/)** — 快速開始、設定、命名空間、自訂框架等內容。

## 🌍 多語言支援

此擴充套件本身也支援 i18n，會自動配合 VS Code 的顯示語言。

| 語言 | 語言 | 語言 |
| --- | --- | --- |
| English | 简体中文 | 繁體中文 |
| 日本語 | 한국어 | Deutsch |
| Français | Español | Português (BR) |
| Русский | Українська | Türkçe |
| Nederlands | Svenska | Norsk |
| Magyar | ภาษาไทย | |

> 想協助翻譯嗎？請參閱[貢獻指南](https://junyou1998.github.io/i18n-ally-community/guide/faq)。

## ❤️ 致謝

本擴充套件最初受到 [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n) 的啟發。Vue SFC 支援由 [kazupon/vue-i18n-locale-message](https://github.com/kazupon/vue-i18n-locale-message) 提供。

### 貢獻者

<a href="https://github.com/junyou1998/i18n-ally-community/graphs/contributors"><img src="https://contrib.rocks/image?repo=junyou1998/i18n-ally-community" /></a>

## 📄 授權條款

這是獨立維護的社群版本，並保留上游貢獻者的著作權與授權聲明，詳見 [`LICENSE`](./LICENSE)。

[MIT](./LICENSE) © 2026 [junyou1998](https://github.com/junyou1998) | MIT © 2025-PRESENT [Lydanne](https://github.com/lydanne) | MIT © 2021-2024 [Lokalise](https://github.com/lokalise) | MIT © 2019-2020 [Anthony Fu](https://github.com/antfu) | MIT © 2018-2019 [think2011](https://github.com/think2011)

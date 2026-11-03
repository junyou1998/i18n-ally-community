<p align="center">
<img src="https://github.com/junyou1998/i18n-ally-community/blob/main/res/logo.png?raw=true" alt="i18n Ally Community" width="128"/>
</p>

<h1 align="center">i18n Ally Community</h1>

<p align="center">
<b>⚠️ 本專案已封存，請改用 <a href="https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next">i18n Ally Next</a></b>
</p>

<p align="center">
<a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.md">English</a> | <a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.zh-CN.md">简体中文</a> | 繁體中文
</p>

---

> ⚠️ **i18n Ally Community 已停止維護並封存。**
>
> 這個擴充套件帶來的反查功能，已於 2026-11-01 正式併入上游 [i18n Ally Next](https://github.com/Lydanne/i18n-ally-next)（v3.0.16 起提供），功能與快捷鍵完全相同。
>
> 👉 請安裝 [**i18n Ally Next**](https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next)（`lydanne.i18n-ally-next`），並移除本擴充套件。遷移步驟請見[下方說明](#遷移到-i18n-ally-next)。

## 為什麼當初發佈這個擴充套件

[i18n Ally Next](https://github.com/Lydanne/i18n-ally-next) 很擅長「從 key 看文案」：在程式碼中顯示翻譯、懸浮預覽、編輯語系檔。但實務上很常遇到的是相反方向的需求——**手上只有文案，要找出它的 key 與使用位置**：

- QA 回報「某個按鈕的文字錯了」，只附上畫面截圖。
- 設計稿或 PM 指出某段文案需要調整。
- 想刪掉一個 key，卻不確定它還有沒有在其他地方被使用。

過去只能先用全域文字搜尋翻遍語系檔，找到 key 之後再拿 key 二次搜尋程式碼；遇到巢狀 key、命名空間或多個語系時更是費工。

這組反查功能最初在 i18n Ally Next 的 fork 中開發完成，並提供給上游參考。由於當時無法確定上游的合併時程，而日常開發已經需要它，因此在 2026-09-21 以獨立的 `i18n-ally-community` 名稱發佈到 VS Code Marketplace。它使用獨立的設定與指令命名空間，可以和 i18n Ally Next 並存、互不干擾。

## 這個擴充套件帶來了什麼

在 i18n Ally Next 原有功能之上，新增三項「由文案反查」的能力：

### 1. 依文案全域搜尋

`Cmd+Alt+Shift+F`（Windows / Linux：`Alt+Shift+F`），或點擊編輯器右上角的地球放大鏡圖示。

- 輸入畫面上看到的文字，即時列出所有語系中符合的 key。
- 每筆結果顯示 key、語系、文案與引用位置（檔案與行號），可用方向鍵預覽。
- 按下 Enter 直接跳到程式碼中的使用位置並以黃色高亮標示；若該 key 尚未被使用，則跳到語系檔中的定義。
- 結果過多時會依 key 平均分配名額，並在標題提示已截斷。

### 2. 檔案內文案搜尋

`Cmd+Alt+F`（Windows / Linux：`Alt+F`）

- 只在目前檔案中尋找符合文案的 key。
- 所有符合位置以淡黃色標示，目前選取的項目以深黃色加框標示，一眼看出該文案在檔案中出現幾次、分別在哪。
- 按 Esc 取消時會還原原本的游標與捲動位置。

### 3. 語系檔 Key 反查（CodeLens / Hover）

- 在 JSON / YAML 語系檔的每個 key 上方顯示 `X usages`，點擊即可展開所有呼叫位置。
- 未被使用的 key 會顯示 `0 usages`，方便清理閒置的 key。
- 懸浮提示中列出前幾個使用位置，可一鍵跳轉。

此外也一併處理了支援命名空間的 key（包含 `ns:key` 這類非 `.` 分隔的框架），並為大型專案建立引用索引，避免開啟語系檔時造成卡頓。

## 為什麼封存

上游維護者已於 2026-11-01 透過 [Lydanne/i18n-ally-next#37](https://github.com/Lydanne/i18n-ally-next/pull/37) 合併這組功能，並在 [v3.0.16](https://github.com/Lydanne/i18n-ally-next/releases/tag/v3.0.16) 正式發佈。

發佈這個擴充套件的目的，本來就是在功能進入上游之前先解決實際需求。既然功能已經回到上游，繼續維護分支反而會帶來問題：

- 使用者必須在兩個幾乎相同的擴充套件之間二選一。
- 問題修正與新功能會分散在兩處，彼此難以同步。
- 兩者同時安裝時，CodeLens、註解與懸浮提示都會重複出現。

因此決定封存本專案，回歸上游一起維護。感謝 [Lydanne](https://github.com/Lydanne) 合併這組功能。

## 遷移到 i18n Ally Next

1. 安裝 [i18n Ally Next](https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next)（`lydanne.i18n-ally-next`）。
2. 解除安裝 i18n Ally Community。
3. 將專案設定改為上游的命名空間：

   | 項目 | i18n Ally Community | i18n Ally Next |
   |---|---|---|
   | 設定前綴（`.vscode/settings.json`） | `i18n-ally-community.*` | `i18n-ally-next.*` |
   | 自訂框架檔 | `.vscode/i18n-ally-community-custom-framework.yml` | `.vscode/i18n-ally-next-custom-framework.yml` |
   | 翻譯審閱檔 | `.vscode/i18n-ally-community-reviews.yml` | `.vscode/i18n-ally-next-reviews.yml` |

4. 快捷鍵不需調整，兩者完全相同。

> 💡 更新到最後一版（v0.2.0）後，擴充套件啟動時會提示你安裝 i18n Ally Next，並可一鍵完成安裝與移除。若偵測到 i18n Ally Next 已安裝，本擴充套件會自動停止運作，避免功能重複。

## ❤️ 致謝

感謝 [Lydanne](https://github.com/Lydanne) 維護 i18n Ally Next 並合併這組功能，以及所有 i18n Ally 系列的歷代貢獻者。本擴充套件最初受到 [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n) 的啟發，Vue SFC 支援由 [kazupon/vue-i18n-locale-message](https://github.com/kazupon/vue-i18n-locale-message) 提供。

## 📄 授權條款

保留上游貢獻者的著作權與授權聲明，詳見 [`LICENSE`](./LICENSE)。

[MIT](./LICENSE) © 2026 [junyou1998](https://github.com/junyou1998) | MIT © 2025-PRESENT [Lydanne](https://github.com/lydanne) | MIT © 2021-2024 [Lokalise](https://github.com/lokalise) | MIT © 2019-2020 [Anthony Fu](https://github.com/antfu) | MIT © 2018-2019 [think2011](https://github.com/think2011)

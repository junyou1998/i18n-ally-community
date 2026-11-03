<p align="center">
<img src="https://github.com/junyou1998/i18n-ally-community/blob/main/res/logo.png?raw=true" alt="i18n Ally Community" width="128"/>
</p>

<h1 align="center">i18n Ally Community</h1>

<p align="center">
<b>⚠️ 本项目已归档，请改用 <a href="https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next">i18n Ally Next</a></b>
</p>

<p align="center">
<a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.md">English</a> | 简体中文 | <a href="https://github.com/junyou1998/i18n-ally-community/blob/main/README.zh-TW.md">繁體中文</a>
</p>

---

> ⚠️ **i18n Ally Community 已停止维护并归档。**
>
> 本扩展带来的反查功能已于 2026-11-01 正式并入上游 [i18n Ally Next](https://github.com/Lydanne/i18n-ally-next)（v3.0.16 起提供），功能与快捷键完全相同。
>
> 👉 请安装 [**i18n Ally Next**](https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next)（`lydanne.i18n-ally-next`），并卸载本扩展。迁移步骤见[下方说明](#迁移到-i18n-ally-next)。

## 为什么当初发布这个扩展

[i18n Ally Next](https://github.com/Lydanne/i18n-ally-next) 很擅长「从 key 看文案」：在代码中显示翻译、悬浮预览、编辑翻译文件。但实际开发中更常遇到的是反方向的需求——**手上只有文案，要找出它的 key 与使用位置**：

- QA 反馈「某个按钮文字不对」，只附了一张截图。
- 设计稿或产品指出某段文案需要调整。
- 想删除一个 key，却不确定它是否还在别处被使用。

过去只能先全局搜索翻遍翻译文件，找到 key 之后再用 key 二次搜索代码；遇到嵌套 key、命名空间或多语言时更加费时。

这组反查功能最初在 i18n Ally Next 的 fork 中开发完成，并提供给上游参考。由于当时无法确定上游的合并时间，而日常开发已经离不开它，因此在 2026-09-21 以独立的 `i18n-ally-community` 名称发布到 VS Code Marketplace。它使用独立的设置与命令命名空间，可以与 i18n Ally Next 并存、互不干扰。

## 这个扩展带来了什么

在 i18n Ally Next 原有功能之上，新增三项「由文案反查」的能力：

### 1. 按文案全局搜索

`Cmd+Alt+Shift+F`（Windows / Linux：`Alt+Shift+F`），或点击编辑器右上角的地球放大镜图标。

- 输入界面上看到的文字，实时列出所有语言中匹配的 key。
- 每条结果显示 key、语言、文案与引用位置（文件与行号），可用方向键预览。
- 按 Enter 直接跳转到代码中的使用位置并以黄色高亮标示；若该 key 尚未被使用，则跳转到翻译文件中的定义。
- 结果过多时会按 key 平均分配名额，并在标题提示已截断。

### 2. 文件内文案搜索

`Cmd+Alt+F`（Windows / Linux：`Alt+F`）

- 只在当前文件中查找匹配文案的 key。
- 所有匹配位置以浅黄色标示，当前选中项以深黄色加框标示，一眼看出该文案在文件中出现几次、分别在哪。
- 按 Esc 取消时会还原原来的光标与滚动位置。

### 3. 翻译文件 Key 反查（CodeLens / Hover）

- 在 JSON / YAML 翻译文件的每个 key 上方显示 `X usages`，点击即可展开所有调用位置。
- 未被使用的 key 会显示 `0 usages`，方便清理闲置的 key。
- 悬浮提示中列出前几个使用位置，可一键跳转。

此外也一并支持了带命名空间的 key（包括 `ns:key` 这类非 `.` 分隔的框架），并为大型项目建立引用索引，避免打开翻译文件时卡顿。

## 为什么归档

上游维护者已于 2026-11-01 通过 [Lydanne/i18n-ally-next#37](https://github.com/Lydanne/i18n-ally-next/pull/37) 合并这组功能，并在 [v3.0.16](https://github.com/Lydanne/i18n-ally-next/releases/tag/v3.0.16) 正式发布。

发布这个扩展的初衷，就是在功能进入上游之前先解决实际需求。既然功能已经回到上游，继续维护分支反而会带来问题：

- 用户必须在两个几乎相同的扩展之间二选一。
- 问题修复与新功能会分散在两处，难以同步。
- 两者同时安装时，CodeLens、注解与悬浮提示都会重复出现。

因此决定归档本项目，回归上游共同维护。感谢 [Lydanne](https://github.com/Lydanne) 合并这组功能。

## 迁移到 i18n Ally Next

1. 安装 [i18n Ally Next](https://marketplace.visualstudio.com/items?itemName=lydanne.i18n-ally-next)（`lydanne.i18n-ally-next`）。
2. 卸载 i18n Ally Community。
3. 将项目配置改为上游的命名空间：

   | 项目 | i18n Ally Community | i18n Ally Next |
   |---|---|---|
   | 设置前缀（`.vscode/settings.json`） | `i18n-ally-community.*` | `i18n-ally-next.*` |
   | 自定义框架文件 | `.vscode/i18n-ally-community-custom-framework.yml` | `.vscode/i18n-ally-next-custom-framework.yml` |
   | 翻译审阅文件 | `.vscode/i18n-ally-community-reviews.yml` | `.vscode/i18n-ally-next-reviews.yml` |

4. 快捷键无需调整，两者完全相同。

> 💡 更新到最后一个版本（v0.2.0）后，扩展启动时会提示你安装 i18n Ally Next，并可一键完成安装与卸载。若检测到已安装 i18n Ally Next，本扩展会自动停止运行，避免功能重复。

## ❤️ 致谢

感谢 [Lydanne](https://github.com/Lydanne) 维护 i18n Ally Next 并合并这组功能，以及 i18n Ally 系列的所有贡献者。本扩展最初受到 [think2011/vscode-vue-i18n](https://github.com/think2011/vscode-vue-i18n) 的启发，Vue SFC 支持由 [kazupon/vue-i18n-locale-message](https://github.com/kazupon/vue-i18n-locale-message) 提供。

## 📄 License

保留上游贡献者的版权与授权声明，详见 [`LICENSE`](./LICENSE)。

[MIT](./LICENSE) © 2026 [junyou1998](https://github.com/junyou1998) | MIT © 2025-PRESENT [Lydanne](https://github.com/lydanne) | MIT © 2021-2024 [Lokalise](https://github.com/lokalise) | MIT © 2019-2020 [Anthony Fu](https://github.com/antfu) | MIT © 2018-2019 [think2011](https://github.com/think2011)

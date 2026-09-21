# Vue I18n

## Recommended Setup

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["src/locales"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.keystyle": "nested",
  "i18n-ally-community.dirStructure": "file"
}
```

## Project Structure

```text
src/
├── locales/
│   ├── en.json
│   ├── zh-CN.json
│   └── ja.json
├── App.vue
└── main.ts
```

## Usage Patterns

i18n Ally Community recognizes the following Vue I18n patterns:

```vue
<template>
  <!-- $t() in templates -->
  <p>{{ $t('hello') }}</p>

  <!-- v-t directive -->
  <p v-t="'hello'"></p>

  <!-- Component interpolation -->
  <i18n-t keypath="greeting" tag="p">
    <template #name>{{ username }}</template>
  </i18n-t>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Composition API
const msg = t('hello')
</script>
```

## SFC i18n Blocks

Vue Single File Component `<i18n>` blocks are supported out of the box:

```vue
<i18n>
{
  "en": { "hello": "Hello" },
  "zh-CN": { "hello": "你好" }
}
</i18n>
```

Enable SFC support by including `vue-sfc` in your frameworks if auto-detection doesn't pick it up:

```jsonc
{
  "i18n-ally-community.enabledFrameworks": ["vue", "vue-sfc"]
}
```

# Svelte, Laravel & Ruby on Rails

## Svelte (svelte-i18n)

### Recommended Setup

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["src/lib/locales"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.keystyle": "nested"
}
```

### Usage Patterns

```svelte
<script>
  import { _ } from 'svelte-i18n'
</script>

<h1>{$_('home.title')}</h1>
<p>{$_('home.description', { values: { name: 'World' } })}</p>
```

## Laravel

### Recommended Setup

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["resources/lang"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.keystyle": "nested",
  "i18n-ally-community.enabledParsers": ["php", "json"]
}
```

### Project Structure

```text
resources/
└── lang/
    ├── en/
    │   ├── messages.php
    │   └── validation.php
    ├── zh-CN/
    │   ├── messages.php
    │   └── validation.php
    └── en.json        # JSON translations (optional)
```

### Usage Patterns

```php
// Blade templates
{{ __('messages.welcome') }}
@lang('messages.welcome')

// PHP code
__('messages.welcome')
trans('messages.welcome')
trans_choice('messages.items', $count)
```

## Ruby on Rails

### Recommended Setup

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.localesPaths": ["config/locales"],
  "i18n-ally-community.sourceLanguage": "en",
  "i18n-ally-community.keystyle": "nested",
  "i18n-ally-community.enabledParsers": ["yaml"]
}
```

### Project Structure

```text
config/
└── locales/
    ├── en.yml
    ├── zh-CN.yml
    └── ja.yml
```

### Usage Patterns

```erb
<%# ERB templates %>
<h1><%= t('home.title') %></h1>
<p><%= t('.description') %></p>  <%# Lazy lookup (relative to view path) %>
```

```ruby
# Ruby code
I18n.t('home.title')
I18n.t(:title, scope: :home)
```

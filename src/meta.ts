export const EXT_NAMESPACE = 'i18n-ally-community'
export const EXT_ID = 'junyou1998.i18n-ally-community'
export const EXT_NAME = 'i18n Ally Community'
export const EXT_EDITOR_ID = 'i18n-ally-community-editor'
export const EXT_REVIEW_ID = 'i18n-ally-community-review'

export const EXT_LEGACY_NAMESPACE = 'vue-i18n-ally'

export const KEY_REG_DEFAULT = '[\\w\\d\\. \\-\\[\\]\\/:]*?'
export const KEY_REG_ALL = '.*?'

export const QUOTE_SYMBOLS = '\'"`'

export const THROTTLE_DELAY = 800
export const FILEWATCHER_TIMEOUT = 100

export const linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-|.]+|\([\w\-|.]+\)))/g
export const linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/
export const bracketsMatcher = /[()]/g
export const linkedKeyModifiers = {
  upper: (str: string) => str.toLocaleUpperCase(),
  lower: (str: string) => str.toLocaleLowerCase(),
} as Record<string, (str: string) => string>

export const DEFAULT_LOCALE_COUNTRY_MAP = {
  en: 'us',
  zh: 'cn',
  de: 'de',
  fr: 'fr',
  ja: 'ja',
  es: 'es',
  vi: 'vn',
  lb: 'lu',
}

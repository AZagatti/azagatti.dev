import { US, BR } from 'country-flag-icons/react/3x2'
import type { ComponentType } from 'react'

export interface LanguageConfig {
  code: string
  name: string
  flag: ComponentType<{ className?: string }>
  isDefault?: boolean
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  pt: {
    code: 'pt',
    name: 'Português',
    flag: BR,
    isDefault: true,
  },
  en: {
    code: 'en',
    name: 'English',
    flag: US,
  },
} as const

export type SupportedLocale = keyof typeof SUPPORTED_LANGUAGES

export const DEFAULT_LOCALE =
  Object.values(SUPPORTED_LANGUAGES).find((lang) => lang.isDefault)?.code ??
  'pt'

export const AVAILABLE_LOCALES = Object.keys(
  SUPPORTED_LANGUAGES
) as SupportedLocale[]

/**
 * Generates URL for switching to a different language
 * @param targetLocale The locale to switch to
 * @param currentLocale The current locale
 * @param currentPath The current path (optional, will use window.location.pathname if not provided)
 */
export const generateLanguageUrl = (
  targetLocale: string,
  currentLocale: string,
  currentPath?: string
): string => {
  const path =
    currentPath ??
    (typeof window !== 'undefined' ? window.location.pathname : '/')

  if (targetLocale === DEFAULT_LOCALE) {
    const pathWithoutLang = path.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/'
    return pathWithoutLang
  }

  if (currentLocale === DEFAULT_LOCALE) {
    return `/${targetLocale}${path}`
  }

  return path.replace(/^\/[a-z]{2}(?=\/|$)/, `/${targetLocale}`)
}

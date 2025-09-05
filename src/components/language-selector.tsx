import { useState } from 'react'
import {
  SUPPORTED_LANGUAGES,
  AVAILABLE_LOCALES,
  generateLanguageUrl,
  type SupportedLocale,
} from '../config/languages'

interface LanguageSelectorProps {
  currentLocale: SupportedLocale
  availableLocales?: SupportedLocale[]
}

export const LanguageSelector = ({
  currentLocale,
  availableLocales = AVAILABLE_LOCALES,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = SUPPORTED_LANGUAGES[currentLocale]
  const otherLanguages = availableLocales.filter(
    (locale) => locale !== currentLocale
  )

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 text-gray-900 dark:text-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
      >
        <currentLanguage.flag className="w-6 h-6" />
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {otherLanguages.map((locale) => {
            const language = SUPPORTED_LANGUAGES[locale]
            return (
              <a
                key={locale}
                href={generateLanguageUrl(locale, currentLocale)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-50 first:rounded-t-md last:rounded-b-md"
                onClick={() => setIsOpen(false)}
                aria-label={`Switch to ${language.name}`}
              >
                <language.flag className="w-6 h-6" />
                <span>{language.name}</span>
              </a>
            )
          })}
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

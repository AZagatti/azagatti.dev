import { useState } from 'react'
import { US, BR } from 'country-flag-icons/react/3x2'

interface LanguageSelectorProps {
  currentLocale: 'pt' | 'en'
}

export const LanguageSelector = ({ currentLocale }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const languages = {
    pt: {
      name: 'Português',
      flag: BR,
    },
    en: {
      name: 'English',
      flag: US,
    },
  }

  const currentLanguage = languages[currentLocale]
  const otherLanguage =
    currentLocale === 'pt' ? languages['en'] : languages['pt']
  const otherLocale = currentLocale === 'pt' ? 'en' : 'pt'

  const getRedirectUrl = () => {
    const path = window.location.pathname
    if (currentLocale === 'pt') {
      return `/en${path}`
    }
    return path.replace('/en', '')
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <currentLanguage.flag className="w-6 h-6" />
        <span>{currentLanguage.name}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <a
            href={getRedirectUrl()}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <otherLanguage.flag className="w-6 h-6" />
            <span>{otherLanguage.name}</span>
          </a>
        </div>
      )}
    </div>
  )
}

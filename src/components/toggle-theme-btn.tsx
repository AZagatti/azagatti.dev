import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const storageKey = 'azagatti:theme'

export const ToggleThemeBtn = () => {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<Themes>()

  useEffect(() => {
    setTheme(() => {
      const darkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const stored = localStorage.getItem(storageKey) as Themes
      if (stored) {
        return stored
      }
      if (darkTheme) {
        return Themes.Dark
      }
      return Themes.Light
    })
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle(Themes.Dark)
    const newTheme =
      localStorage.getItem(storageKey) === Themes.Dark
        ? Themes.Light
        : Themes.Dark
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  const getIcon = () => {
    if (!theme) {
      return null
    }
    return theme === Themes.Dark ? <Sun /> : <Moon />
  }

  return (
    <button
      type="button"
      className="bg-transparent border-none flex items-center justify-center "
      onClick={toggleTheme}
      aria-label={t('theme-button.aria.button')!}
    >
      {getIcon()}
    </button>
  )
}

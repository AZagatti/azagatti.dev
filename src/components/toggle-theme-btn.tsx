import { useEffect, useState } from 'react'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const storageKey = 'azagatti:theme'

interface ToggleThemeBtnProps {
  ariaLabel: string
}

export const ToggleThemeBtn = ({ ariaLabel }: ToggleThemeBtnProps) => {
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
    const root = document.documentElement
    const isDark = root.classList.contains(Themes.Dark)
    const newTheme = isDark ? Themes.Light : Themes.Dark

    root.classList.remove(isDark ? Themes.Dark : Themes.Light)
    root.classList.add(newTheme)

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
      aria-label={ariaLabel}
    >
      {getIcon()}
    </button>
  )
}

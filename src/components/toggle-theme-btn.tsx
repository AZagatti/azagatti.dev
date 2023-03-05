import { useLayoutEffect, useState } from 'react'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const storageKey = 'azagatti:theme'

export const ToggleThemeBtn = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) ?? Themes.Light
  )

  const toggleTheme = () => {
    document.documentElement.classList.toggle(Themes.Dark)
    const newTheme =
      localStorage.getItem(storageKey) === Themes.Dark
        ? Themes.Light
        : Themes.Dark
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      type="button"
      className="bg-transparent border-none flex items-center justify-center"
      onClick={toggleTheme}
      aria-label="Alterar tema"
    >
      {theme === Themes.Dark ? <Sun /> : <Moon />}
    </button>
  )
}

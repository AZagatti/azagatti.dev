import { useLayoutEffect, useState } from 'react'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const storageKey = 'azagatti:theme'

export const ToggleThemeBtn = () => {
  const [theme, setTheme] = useState(Themes.Dark)

  const toggleTheme = () => {
    document.documentElement.classList.toggle(Themes.Dark)
    const newTheme = localStorage.getItem(storageKey) === Themes.Dark ? Themes.Light : Themes.Dark
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  useLayoutEffect(() => {
    const curTheme = localStorage.getItem(storageKey)
    if (
      curTheme === Themes.Dark ||
      (!(storageKey in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: ${Themes.Dark})`).matches)
    ) {
      document.documentElement.classList.add(Themes.Dark)
      setTheme(Themes.Dark)
    } else {
      document.documentElement.classList.remove(Themes.Dark)
      setTheme(Themes.Light)
    }
  }, [])

  return (
    <button
      type="button"
      className="bg-transparent border-none flex items-center justify-center"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === Themes.Dark ? <Sun /> : <Moon />}
    </button>
  )
}

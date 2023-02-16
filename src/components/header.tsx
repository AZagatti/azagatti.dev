import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const storageKey = 'azagatti:theme'

export const Header = () => {
  const [theme, setTheme] = useLocalStorage(storageKey, 'dark')

  function toggleTheme() {
    window.document.documentElement.classList.toggle(Themes.Dark)
    const newTheme = theme === Themes.Dark ? Themes.Light : Themes.Dark
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    if (
      theme === Themes.Dark ||
      (!(storageKey in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: ${Themes.Dark})`).matches)
    ) {
      window.document.documentElement.classList.add(Themes.Dark)
      setTheme(Themes.Dark)
    } else {
      window.document.documentElement.classList.remove(Themes.Dark)
      setTheme(Themes.Light)
    }
  }, [])

  return (
    <>
      <div className="items-center justify-center w-full py-4">
        <nav className="flex max-w-6xl px-8 justify-between items-center flex-1 mx-auto">
          <h2 className="text-3xl dark:text-white">
            <a href="/blog" className="decoration-transparent hover:opacity-70">
              André Zagatti
            </a>
          </h2>
          <button
            type="button"
            className="bg-transparent border-none flex items-center justify-center"
            onClick={toggleTheme}
          >
            {theme === Themes.Dark ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
      <hr className="my-8 w-full dark:opacity-30" />
    </>
  )
}

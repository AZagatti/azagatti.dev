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
  const [theme, setTheme] = useLocalStorage(storageKey, Themes.Light)

  function toggleTheme() {
    document.documentElement.classList.toggle(Themes.Dark)
    const newTheme = theme === Themes.Dark ? Themes.Light : Themes.Dark
    setTheme(newTheme)
  }

  useEffect(() => {
    if (
      theme === Themes.Dark ||
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
    <>
      <div className="items-center justify-center w-full pt-8">
        <nav className="flex max-w-6xl px-8 justify-between items-center flex-1 mx-auto">
          <h2 className="text-3xl">
            <a href="/blog" className="no-underline hover:opacity-70">
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
      <hr />
    </>
  )
}

import { useEffect, useState } from 'react'
import { Moon } from './icons/moon'
import { Sun } from './icons/sun'

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

interface ToggleThemeBtnProps {
  ariaLabel: string
}

export const ToggleThemeBtn = ({ ariaLabel }: ToggleThemeBtnProps) => {
  const [theme, setTheme] = useState<Themes>()

  useEffect(() => {
    const updateThemeState = () => {
      const isDark = document.documentElement.classList.contains(Themes.Dark)
      setTheme(isDark ? Themes.Dark : Themes.Light)
    }

    updateThemeState()

    const observer = new MutationObserver(updateThemeState)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const handleToggleTheme = () => {
    window.toggleTheme?.()
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
      onClick={handleToggleTheme}
      aria-label={ariaLabel}
    >
      {getIcon()}
    </button>
  )
}

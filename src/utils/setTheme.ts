export const setTheme = () => {
  const Themes = {
    Dark: 'dark',
    Light: 'light',
  }
  const storageKey = 'azagatti:theme'

  const theme = (() => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(storageKey)
    ) {
      return localStorage.getItem(storageKey)
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Themes.Dark
    }
    return Themes.Light
  })()
  if (theme === Themes.Light) {
    document.documentElement.classList.remove(Themes.Dark)
  } else {
    document.documentElement.classList.add(Themes.Dark)
  }
}

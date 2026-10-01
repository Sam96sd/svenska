import { useEffect } from 'react'
import { useActiveProfile } from '../lib/storage/hooks'

/** Applies the active profile's theme (auto / light / dark) to <html>. */
export function ThemeController() {
  const theme = useActiveProfile()?.settings.theme ?? 'auto'

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'auto' && media.matches)
      document.documentElement.classList.toggle('dark', dark)
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', dark ? '#0E151E' : '#2C5D8F')
    }
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [theme])

  return null
}

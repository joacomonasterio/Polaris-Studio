import { useEffect, useState } from 'react'
import type { Lang } from '../i18n'

const STORAGE_KEY = 'polaris-lang'

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage unavailable (private mode, blocked storage, etc.)
  }
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage unavailable, language just won't persist
    }
  }, [lang])

  return [lang, setLang] as const
}

import { useGameStore } from '../store/gameStore'
import { translations, type TranslationKey } from './translations'

export function useTranslation() {
  const locale = useGameStore(s => s.locale)
  const t = (key: TranslationKey): string =>
    translations[locale][key] ?? translations.en[key] ?? key
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return { t, locale, dir }
}

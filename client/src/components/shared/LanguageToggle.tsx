import { useTranslation } from 'react-i18next';
import { useSounds } from '../../sounds/useSounds';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const { playClick } = useSounds();
  const isArabic = i18n.language === 'ar';

  return (
    <button
      onClick={() => { playClick(); i18n.changeLanguage(isArabic ? 'en' : 'ar'); }}
      className="vintage-card gold-glow cursor-pointer px-3 py-1.5 font-cinzel text-xs text-text-secondary hover:text-border-accent transition-colors"
    >
      {isArabic ? 'EN' : 'AR'}
    </button>
  );
}

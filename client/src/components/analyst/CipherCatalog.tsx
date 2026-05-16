import { useTranslation } from 'react-i18next';

export default function CipherCatalog() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-40 gap-2">
      <p className="font-amiri text-text-faded text-center">
        {t('search_placeholder')}
      </p>
      <p className="font-cinzel text-xs text-text-faded opacity-50">↑</p>
    </div>
  );
}
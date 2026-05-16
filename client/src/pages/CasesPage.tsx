import { useTranslation } from 'react-i18next';
import LanguageToggle from '../components/shared/LanguageToggle';
import MuteToggle from '../components/shared/MuteToggle';
import { useSounds } from '../sounds/useSounds';
import { trainingCase } from '../cases/training-case';

interface CasesPageProps {
  onSelectCase: (caseId: string) => void;
}

const cases = [trainingCase];

const difficultyColors: Record<string, string> = {
  tutorial: 'text-border-accent border-border-accent',
  easy: 'text-stamp-green border-stamp-green',
  medium: 'text-orange-400 border-orange-400',
  hard: 'text-accent-red-bright border-accent-red-bright',
};

export default function CasesPage({ onSelectCase }: CasesPageProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 page-enter">
      <div className="w-full max-w-lg space-y-8">
        <div className="flex items-center justify-between">
          <div />
          <h1 className="font-cinzel text-3xl md:text-4xl text-text-primary text-center">
            {t('game_title')}
          </h1>
          <div className="flex items-center gap-2">
            <MuteToggle />
            <LanguageToggle />
          </div>
        </div>

        <div>
          <h2 className="font-cinzel text-lg text-text-faded mb-4">{t('cases_title')}</h2>
          <div className="space-y-4">
            {cases.map((c) => (
              <div key={c.id} className="vintage-card p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-text-primary text-lg">{c.title}</h3>
                  <span
                    className={`font-cinzel text-[0.6rem] uppercase tracking-wider border px-2 py-0.5 ${difficultyColors[c.difficulty] ?? difficultyColors.tutorial}`}
                  >
                    {t(`difficulty_${c.difficulty}`)}
                  </span>
                </div>
                <p className="font-amiri text-text-secondary text-sm leading-relaxed">
                  {c.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-amiri text-text-faded text-xs">
                    {c.timeLimit
                      ? `${t('time_limit')}: ${c.timeLimit / 60} ${t('minutes')}`
                      : t('no_time_limit')}
                  </span>
                  <button
                    onClick={() => { playClick(); onSelectCase(c.id); }}
                    className="vintage-card gold-glow cursor-pointer px-4 py-2 font-cinzel text-sm text-text-secondary hover:text-border-accent transition-colors"
                  >
                    {t('start_case')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

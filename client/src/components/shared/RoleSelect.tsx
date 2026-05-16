import { useTranslation } from 'react-i18next';
import type { GameRole } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

interface RoleSelectProps {
  onSelect: (role: GameRole) => void;
}

export default function RoleSelect({ onSelect }: RoleSelectProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();

  const roles: { role: GameRole; title: string; desc: string }[] = [
    {
      role: 'investigator',
      title: t('investigator'),
      desc: t('investigator_desc'),
    },
    {
      role: 'analyst',
      title: t('analyst'),
      desc: t('analyst_desc'),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-lg mx-auto">
      <div className="space-y-4 text-center">
        <div className="flex justify-center mb-2">
          <span className="stamp-red">{t('key_evidence')}</span>
        </div>
        <h1 className="font-cinzel text-3xl md:text-4xl text-text-primary leading-relaxed">
          {t('game_title')}
        </h1>
        <p className="font-amiri text-text-secondary text-lg leading-relaxed">
          {t('select_role')}
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {roles.map(({ role, title, desc }) => (
          <button
            key={role}
            onClick={() => { playClick(); onSelect(role); }}
            className="vintage-card gold-glow cursor-pointer text-start w-full p-6 transition-all duration-200 hover:bg-bg-paper group"
          >
            <span className="block font-cinzel text-xl text-text-primary group-hover:text-border-accent transition-colors">
              {title}
            </span>
            <span className="block font-amiri text-text-secondary text-sm mt-1">
              {desc}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

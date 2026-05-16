import { useTranslation } from 'react-i18next';
import { useGameStore } from '../store/game.store';
import RoleSelect from '../components/shared/RoleSelect';
import LanguageToggle from '../components/shared/LanguageToggle';
import MuteToggle from '../components/shared/MuteToggle';
import { useSounds } from '../sounds/useSounds';
import type { GameRole, Case } from '../types/case.types';

interface RoleSelectPageProps {
  selectedCase: Case;
  onBack: () => void;
}

export default function RoleSelectPage({ selectedCase, onBack }: RoleSelectPageProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();
  const initGame = useGameStore((s) => s.initGame);

  const handleSelect = (role: GameRole) => {
    initGame(selectedCase, role);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 page-enter">
      <div className="w-full max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => { playClick(); onBack(); }}
            className="font-amiri text-text-faded hover:text-text-secondary transition-colors text-sm cursor-pointer"
          >
            ← {t('back')}
          </button>
          <div className="flex items-center gap-2">
            <MuteToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="text-center space-y-3">
          <h2 className="font-cinzel text-lg text-text-faded">{selectedCase.title}</h2>
          <p className="font-amiri text-text-secondary text-sm leading-relaxed">
            {selectedCase.description}
          </p>
        </div>

        <RoleSelect onSelect={handleSelect} />
      </div>
    </div>
  );
}

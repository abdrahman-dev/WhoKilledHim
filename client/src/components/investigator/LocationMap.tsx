import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Location } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

interface LocationMapProps {
  locations: Location[];
  currentLocationId: string;
  discoveredEvidenceIds: string[];
  onSelectLocation: (id: string) => void;
  onAccuse: () => void;
  onExit: () => void;
}

export default function LocationMap({
  locations,
  currentLocationId,
  discoveredEvidenceIds,
  onSelectLocation,
  onAccuse,
  onExit,
}: LocationMapProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const evidenceCountAt = (loc: Location) =>
    loc.evidence.filter((e) => discoveredEvidenceIds.includes(e.id)).length;

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-cinzel text-lg text-text-primary mb-4 px-4 pt-4">
        {t('locations')}
      </h2>
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {locations.map((loc) => {
          const isCurrent = loc.id === currentLocationId;
          const discovered = evidenceCountAt(loc);
          return (
            <button
              key={loc.id}
              onClick={() => { playClick(); onSelectLocation(loc.id); }}
              className={`w-full text-start vintage-card gold-glow cursor-pointer p-4 transition-all duration-200 location-item ${
                isCurrent ? 'location-item-current' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-amiri text-text-primary">{loc.name}</span>
                <span className="font-mono text-xs text-text-faded">
                  {discovered > 0 ? `✓ ${discovered}` : `${loc.evidence.length}`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="p-4 border-t border-border-main/30 space-y-2">
        <button
          onClick={() => { playClick(); setShowExitConfirm(true); }}
          className="w-full vintage-card cursor-pointer p-3 text-center font-cinzel text-sm text-text-faded hover:text-text-secondary transition-colors"
        >
          {t('exit_case')}
        </button>
        <button
          onClick={() => { playClick(); onAccuse(); }}
          className="w-full vintage-card cursor-pointer p-4 text-center font-cinzel text-accent-red-bright border-accent-red/50 hover:border-accent-red-bright transition-colors gold-glow"
        >
          {t('submit_accusation')}
        </button>
      </div>

      {showExitConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowExitConfirm(false)}
        >
          <div
            className="vintage-card p-6 max-w-sm w-full space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-amiri text-text-primary">{t('exit_confirm')}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => { playClick(); setShowExitConfirm(false); }}
                className="vintage-card gold-glow cursor-pointer px-4 py-2 font-cinzel text-sm text-text-secondary hover:text-border-accent transition-colors"
              >
                {t('back')}
              </button>
              <button
                onClick={() => { playClick(); onExit(); }}
                className="vintage-card cursor-pointer px-4 py-2 font-cinzel text-sm text-accent-red-bright border-accent-red/50 hover:border-accent-red-bright transition-colors"
              >
                {t('exit_case')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../store/game.store';
import LocationMap from '../components/investigator/LocationMap';
import LocationDetail from '../components/investigator/LocationDetail';
import AccusationForm from '../components/investigator/AccusationForm';
import LanguageToggle from '../components/shared/LanguageToggle';
import MuteToggle from '../components/shared/MuteToggle';
import { useSounds } from '../sounds/useSounds';

interface InvestigatorPageProps {
  onExit: () => void;
}

export default function InvestigatorPage({ onExit }: InvestigatorPageProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();
  const caseData = useGameStore((s) => s.caseData);
  const currentLocationId = useGameStore((s) => s.currentLocationId);
  const discoveredEvidenceIds = useGameStore((s) => s.discoveredEvidenceIds);
  const setLocation = useGameStore((s) => s.setLocation);
  const discoverEvidence = useGameStore((s) => s.discoverEvidence);
  const accuse = useGameStore((s) => s.accuse);

  const [showAccusation, setShowAccusation] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  if (!caseData || !currentLocationId) return null;

  const currentLocation = caseData.locations.find(
    (l) => l.id === currentLocationId
  );
  if (!currentLocation) return null;

  const locationCharacters = currentLocation.characters
    .map((chId) => caseData.characters.find((ch) => ch.id === chId))
    .filter((ch): ch is NonNullable<typeof ch> => ch != null);

  const suspects = caseData.characters.filter((ch) => ch.role === 'suspect');

  if (showAccusation) {
    return (
      <AccusationForm
        suspects={suspects}
        onSubmit={(acc) => accuse(acc)}
        onBack={() => setShowAccusation(false)}
      />
    );
  }

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden page-enter">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-3 py-2 border-b border-border-main/30 bg-bg-paper/30 shrink-0">
        <button
          onClick={() => { playClick(); setShowLocations(!showLocations); }}
          className="vintage-card gold-glow cursor-pointer px-3 py-2 font-cinzel text-xs text-text-primary min-h-[44px]"
        >
          ☰ {t('locations')}
        </button>
        <div className="flex items-center gap-2">
          <MuteToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile locations panel */}
      {showLocations && (
        <div className="md:hidden overflow-x-auto border-b border-border-main/30 bg-bg-paper/20 scrollbar-none">
          <div className="flex gap-2 p-3">
            {caseData.locations.map((loc) => {
              const isCurrent = loc.id === currentLocationId;
              const discovered = loc.evidence.filter(
                (e) => discoveredEvidenceIds.includes(e.id)
              ).length;
              return (
                <button
                  key={loc.id}
                  onClick={() => { playClick(); setLocation(loc.id); setShowLocations(false); }}
                  className={`vintage-card gold-glow cursor-pointer px-4 py-3 shrink-0 text-start min-w-[120px] min-h-[44px] ${
                    isCurrent ? 'location-item-current' : ''
                  }`}
                >
                  <div className="font-amiri text-sm text-text-primary">{loc.name}</div>
                  <div className="font-mono text-xs text-text-faded mt-0.5">
                    {discovered > 0 ? `✓ ${discovered}` : `${loc.evidence.length}`}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-72 shrink-0 border-s border-border-main/30 flex-col bg-bg-paper/30">
        <div className="flex items-center justify-end gap-2 p-2">
          <MuteToggle />
          <LanguageToggle />
        </div>
        <LocationMap
          locations={caseData.locations}
          currentLocationId={currentLocationId}
          discoveredEvidenceIds={discoveredEvidenceIds}
          onSelectLocation={setLocation}
          onAccuse={() => setShowAccusation(true)}
          onExit={onExit}
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <LocationDetail
          location={currentLocation}
          characters={locationCharacters}
          onDiscoverEvidence={discoverEvidence}
        />
      </main>

      {/* Fixed bottom bar — mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border-main/30 bg-bg-paper p-3 flex gap-3 z-40">
        <button
          onClick={() => { playClick(); onExit(); }}
          className="flex-1 vintage-card cursor-pointer py-3 text-center font-cinzel text-sm text-text-faded hover:text-text-secondary transition-colors min-h-[44px]"
        >
          {t('exit_case')}
        </button>
        <button
          onClick={() => { playClick(); setShowAccusation(true); }}
          className="flex-1 vintage-card cursor-pointer py-3 text-center font-cinzel text-sm text-accent-red-bright border-accent-red/50 hover:border-accent-red-bright transition-colors gold-glow min-h-[44px]"
        >
          {t('submit_accusation')}
        </button>
      </div>
    </div>
  );
}

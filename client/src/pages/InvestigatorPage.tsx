import { useState } from 'react';
import { useGameStore } from '../store/game.store';
import LocationMap from '../components/investigator/LocationMap';
import LocationDetail from '../components/investigator/LocationDetail';
import AccusationForm from '../components/investigator/AccusationForm';
import LanguageToggle from '../components/shared/LanguageToggle';
import MuteToggle from '../components/shared/MuteToggle';

interface InvestigatorPageProps {
  onExit: () => void;
}

export default function InvestigatorPage({ onExit }: InvestigatorPageProps) {
  const caseData = useGameStore((s) => s.caseData);
  const currentLocationId = useGameStore((s) => s.currentLocationId);
  const discoveredEvidenceIds = useGameStore((s) => s.discoveredEvidenceIds);
  const setLocation = useGameStore((s) => s.setLocation);
  const discoverEvidence = useGameStore((s) => s.discoverEvidence);
  const accuse = useGameStore((s) => s.accuse);

  const [showAccusation, setShowAccusation] = useState(false);

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
    <div className="h-screen flex overflow-hidden page-enter">
      <aside className="w-72 shrink-0 border-s border-border-main/30 flex flex-col bg-bg-paper/30">
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
      <main className="flex-1 overflow-y-auto">
        <LocationDetail
          location={currentLocation}
          characters={locationCharacters}
          onDiscoverEvidence={discoverEvidence}
        />
      </main>
    </div>
  );
}

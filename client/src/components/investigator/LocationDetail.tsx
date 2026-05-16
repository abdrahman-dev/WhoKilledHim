import { useTranslation } from 'react-i18next';
import type { Location, Character } from '../../types/case.types';
import EvidenceCard from './EvidenceCard';
import CharacterCard from './CharacterCard';

interface LocationDetailProps {
  location: Location;
  characters: Character[];
  onDiscoverEvidence: (id: string) => void;
}

export default function LocationDetail({
  location,
  characters,
  onDiscoverEvidence,
}: LocationDetailProps) {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="font-cinzel text-2xl text-text-primary mb-2">{location.name}</h2>
        <p className="font-amiri text-text-secondary italic leading-relaxed">
          {location.description}
        </p>
      </div>

      {characters.length > 0 && (
        <div>
          <h3 className="font-cinzel text-sm text-text-faded mb-3">
            {t('present_in_location')}:
          </h3>
          <div className="space-y-3">
            {characters.map((ch) => (
              <CharacterCard key={ch.id} character={ch} />
            ))}
          </div>
        </div>
      )}

      {location.evidence.length > 0 && (
        <div>
          <h3 className="font-cinzel text-sm text-text-faded mb-3">
            {t('evidence')}:
          </h3>
          <div className="space-y-3">
            {location.evidence.map((ev) => (
              <EvidenceCard
                key={ev.id}
                evidence={ev}
                onDiscover={onDiscoverEvidence}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

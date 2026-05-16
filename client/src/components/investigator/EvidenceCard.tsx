import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { CaseEvidence, CipherEvidence, KeywordEvidence } from '../../types/case.types';
import EvidenceModal from './EvidenceModal';
import { useSounds } from '../../sounds/useSounds';

const isCipher = (ev: CaseEvidence): ev is CipherEvidence => ev.type === 'cipher';
const isKeyword = (ev: CaseEvidence): ev is KeywordEvidence => ev.type === 'keyword';

interface EvidenceCardProps {
  evidence: CaseEvidence;
  onDiscover: (id: string) => void;
}

export default function EvidenceCard({ evidence, onDiscover }: EvidenceCardProps) {
  const { t } = useTranslation();
  const { playClick, playPaper } = useSounds();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    onDiscover(evidence.id);
  }, []);

  const borderClass = isCipher(evidence)
    ? 'border-border-accent'
    : 'border-border-main';

  const typeLabel = () => {
    switch (evidence.type) {
      case 'cipher': return t('cipher');
      case 'keyword': return t('keyword');
      case 'physical': return t('physical');
      case 'testimony': return t('testimony');
    }
  };

  const handleClick = () => {
    playClick();
    playPaper();
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`vintage-card evidence-card p-4 cursor-pointer gold-glow ${borderClass} ${evidence.isKeyEvidence ? 'relative' : ''}`}
        onClick={handleClick}
      >
        {evidence.isKeyEvidence && (
          <div className="absolute top-2 end-2">
            <span className="stamp-red text-[0.55rem]">{t('key_evidence')}</span>
          </div>
        )}

        <div className="flex items-start gap-2">
          {isCipher(evidence) && (
            <span className="text-border-accent text-lg shrink-0 mt-0.5">&#x1f510;</span>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-cinzel text-sm text-text-primary">{evidence.label}</h4>
              <span className="font-cinzel text-[0.55rem] text-text-faded uppercase tracking-wider">
                {typeLabel()}
              </span>
            </div>
            {isCipher(evidence) ? (
              <p className="cipher-text text-sm">{evidence.rawCipher}</p>
            ) : isKeyword(evidence) ? (
              <p className="font-amiri text-text-secondary text-sm leading-relaxed">
                {evidence.visibleToInvestigator}
                <span className="border-b border-dashed border-border-accent ms-1 text-border-accent">
                  {evidence.keyword}
                </span>
              </p>
            ) : (
              <p className="font-amiri text-text-secondary text-sm leading-relaxed">
                {evidence.visibleToInvestigator}
              </p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <EvidenceModal
          evidence={evidence}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

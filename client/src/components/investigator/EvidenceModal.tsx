import { useTranslation } from 'react-i18next';
import type { CaseEvidence, CipherEvidence } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

const isCipher = (ev: CaseEvidence): ev is CipherEvidence => ev.type === 'cipher';

interface EvidenceModalProps {
  evidence: CaseEvidence;
  onClose: () => void;
}

export default function EvidenceModal({ evidence, onClose }: EvidenceModalProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();

  const typeLabel = () => {
    switch (evidence.type) {
      case 'cipher': return t('cipher');
      case 'keyword': return t('keyword');
      case 'physical': return t('physical');
      case 'testimony': return t('testimony');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => { playClick(); onClose(); }}
    >
      <div
        className="vintage-card p-4 md:p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-text-primary text-lg">{evidence.label}</span>
            {evidence.isKeyEvidence && (
              <span className="stamp-red text-[0.5rem]">{t('key_evidence')}</span>
            )}
          </div>
          <button
            onClick={() => { playClick(); onClose(); }}
            className="text-text-faded hover:text-text-secondary text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="vintage-card bg-bg-paper/50 px-3 py-1.5 inline-block">
          <span className="font-cinzel text-xs text-text-faded">{typeLabel()}</span>
        </div>

        {isCipher(evidence) && (
          <div className="bg-bg-primary/50 border border-border-main/30 rounded p-3">
            <code className="cipher-text text-sm block">{evidence.rawCipher}</code>
          </div>
        )}

        <p className="font-amiri text-text-secondary text-sm leading-relaxed">
          {evidence.visibleToInvestigator}
        </p>
      </div>
    </div>
  );
}

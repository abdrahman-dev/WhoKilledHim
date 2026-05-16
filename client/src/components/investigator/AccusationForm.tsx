import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Character, Accusation } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

interface AccusationFormProps {
  suspects: Character[];
  onSubmit: (accusation: Accusation) => void;
  onBack: () => void;
}

export default function AccusationForm({ suspects, onSubmit, onBack }: AccusationFormProps) {
  const { t } = useTranslation();
  const { playClick, playStamp } = useSounds();
  const [suspectId, setSuspectId] = useState(suspects[0]?.id ?? '');
  const [evidenceSummary, setEvidenceSummary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suspectId || !evidenceSummary.trim()) return;
    playStamp();
    onSubmit({
      suspectId,
      evidenceSummary: evidenceSummary.trim(),
      timestamp: Date.now(),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 page-enter">
      <div className="vintage-card p-8 w-full max-w-xl space-y-6">
        <button
          onClick={() => { playClick(); onBack(); }}
          className="font-amiri text-text-faded hover:text-text-secondary transition-colors text-sm cursor-pointer"
        >
          ← {t('back')}
        </button>

        <h2 className="font-cinzel text-2xl text-text-primary text-center">
          {t('accusation_title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-cinzel text-sm text-text-faded mb-2">
              {t('choose_suspect')}
            </label>
            <select
              value={suspectId}
              onChange={(e) => { playClick(); setSuspectId(e.target.value); }}
              className="w-full vintage-card bg-bg-card text-text-primary font-amiri p-3 cursor-pointer appearance-none"
              dir="auto"
            >
              {suspects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-cinzel text-sm text-text-faded mb-2">
              {t('evidence_summary')}
            </label>
            <textarea
              value={evidenceSummary}
              onChange={(e) => setEvidenceSummary(e.target.value)}
              placeholder={t('evidence_placeholder')}
              className="w-full vintage-card bg-bg-card text-text-primary font-amiri p-3 min-h-[180px] resize-y"
              dir="auto"
            />
          </div>

          <button
            type="submit"
            disabled={!suspectId || !evidenceSummary.trim()}
            className="w-full vintage-card cursor-pointer p-4 text-center font-cinzel text-accent-red-bright border-accent-red/50 hover:border-accent-red-bright transition-colors gold-glow disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t('submit_accusation')}
          </button>

          <p className="text-center font-amiri text-text-faded text-xs">
            {t('accusation_warning')}
          </p>
        </form>
      </div>
    </div>
  );
}

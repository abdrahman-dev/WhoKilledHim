import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/game.store';
import type { DeductionFlags } from '../../types/case.types';

export default function DeductionPanel() {
  const { t } = useTranslation();
  const caseData = useGameStore((s) => s.caseData);
  const deductionFlags = useGameStore((s) => s.deductionFlags);
  const setDeductionFlag = useGameStore((s) => s.setDeductionFlag);

  if (!caseData) return null;

  const suspects = caseData.characters.filter((ch) => ch.role === 'suspect');

  const getFlag = (suspectId: string): DeductionFlags | undefined =>
    deductionFlags.find((f) => f.suspectId === suspectId);

  const toggleLying = (suspectId: string, current?: boolean) => {
    setDeductionFlag({ suspectId, suspectIsLying: !current });
  };

  const toggleNervous = (suspectId: string, current?: boolean) => {
    setDeductionFlag({ suspectId, suspectIsNervous: !current });
  };

  const setImportance = (suspectId: string, importance: 'low' | 'medium' | 'high') => {
    setDeductionFlag({ suspectId, evidenceImportance: importance });
  };

  return (
    <div className="space-y-4">
      <div className="border border-accent-red-bright/20 bg-accent-red-bright/5 p-3 text-center">
        <p className="font-amiri text-xs text-accent-red-bright/80 leading-relaxed">
          ⚠ {t('deduction_warning')}
        </p>
      </div>

      <div className="space-y-3">
        {suspects.map((suspect) => {
          const flag = getFlag(suspect.id);
          return (
            <div key={suspect.id} className="vintage-card p-4 space-y-3">

              <h4 className="font-cinzel text-sm text-text-primary">{suspect.name}</h4>

              {/* سجل القسم */}
              {suspect.policeRecord && (
                <div className="bg-bg-primary/40 border border-border-main/20 p-3">
                  <p className="font-cinzel text-[0.6rem] text-text-faded uppercase tracking-widest mb-1">
                    {t('police_record')}
                  </p>
                  <p className="font-amiri text-text-faded text-xs leading-relaxed italic">
                    {suspect.policeRecord}
                  </p>
                </div>
              )}

              <div className="vintage-divider" />

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={flag?.suspectIsLying ?? false}
                    onChange={() => toggleLying(suspect.id, flag?.suspectIsLying)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 border flex items-center justify-center text-[10px] leading-none transition-colors ${
                      flag?.suspectIsLying
                        ? 'bg-accent-red-bright/20 border-accent-red-bright/60'
                        : 'border-border-main/50'
                    }`}
                  >
                    {flag?.suspectIsLying && (
                      <span className="text-accent-red-bright font-bold">✗</span>
                    )}
                  </span>
                  <span className="font-amiri text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                    {t('seems_lying')}
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={flag?.suspectIsNervous ?? false}
                    onChange={() => toggleNervous(suspect.id, flag?.suspectIsNervous)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 border flex items-center justify-center text-[10px] leading-none transition-colors ${
                      flag?.suspectIsNervous
                        ? 'bg-amber-800/30 border-amber-600/50'
                        : 'border-border-main/50'
                    }`}
                  >
                    {flag?.suspectIsNervous && (
                      <span className="text-amber-500 font-bold">✗</span>
                    )}
                  </span>
                  <span className="font-amiri text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                    {t('seems_nervous')}
                  </span>
                </label>
              </div>

              <div>
                <p className="font-cinzel text-xs text-text-faded mb-2">{t('evidence_importance')}</p>
                <div className="flex gap-2">
                  {(['low', 'medium', 'high'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setImportance(suspect.id, level)}
                      className={`font-cinzel text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                        flag?.evidenceImportance === level
                          ? 'border-border-accent text-border-accent bg-border-accent/10'
                          : 'border-border-main/30 text-text-faded hover:text-text-secondary hover:border-border-main/50'
                      }`}
                    >
                      {t(`importance_${level}`)}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
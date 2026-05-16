import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Character } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { t } = useTranslation();
  const { playClick, playPaper, playTypewriter } = useSounds();
  const [showModal, setShowModal] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    playTypewriter();
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="vintage-card p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-amiri text-text-primary font-bold">{character.name}</h4>
          <span className="font-cinzel text-[0.6rem] text-text-faded uppercase tracking-wider">
            {character.role}
          </span>
        </div>
        <p className="font-amiri text-text-secondary text-sm leading-relaxed">
          {character.description}
        </p>
        {character.role !== 'victim' && (
          <button
            onClick={() => { playClick(); playPaper(); setShowModal(true); }}
            className="vintage-card gold-glow cursor-pointer px-3 py-1.5 text-xs font-cinzel text-text-secondary hover:text-border-accent transition-colors min-h-[44px]"
          >
            {t('interrogate')}
          </button>
        )}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="vintage-card w-full max-w-lg mx-4 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — ثابت */}
            <div className="p-4 md:p-6 pb-4 shrink-0">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-cinzel text-text-primary">{character.name}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-text-faded hover:text-text-secondary text-xl leading-none cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {/* Alibi */}
              {character.alibi && (
                <div className="vintage-card bg-bg-paper/50 p-3 mb-3">
                  <p className="font-cinzel text-xs text-text-faded mb-1">{t('alibi')}</p>
                  <p className="font-amiri text-text-secondary text-sm leading-relaxed">
                    {character.alibi}
                  </p>
                </div>
              )}

              {/* Stats */}
              {character.stats && (
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between font-cinzel text-xs text-text-faded mb-1">
                      <span>{t('trust_level')}</span>
                      <span>{character.stats.trustLevel}</span>
                    </div>
                    <div className="h-[6px] bg-gray-900/60">
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${Math.abs(character.stats.trustLevel)}%`,
                          backgroundColor: character.stats.trustLevel >= 0 ? '#4ade80' : '#ef4444',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-cinzel text-xs text-text-faded mb-1">
                      <span>{t('stress_level')}</span>
                      <span>{character.stats.stressLevel}</span>
                    </div>
                    <div className="h-[6px] bg-gray-900/60">
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${character.stats.stressLevel}%`,
                          backgroundColor: '#f59e0b',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Questions — scrollable منفصل */}
            {character.questions && character.questions.length > 0 && (
              <div className="flex flex-col min-h-0 border-t border-border-main/30">
                <p className="font-cinzel text-xs text-text-faded px-6 py-3 shrink-0">
                  — {t('interrogate')} —
                </p>
                <div className="overflow-y-auto px-6 pb-6 space-y-2">
                  {character.questions.map((q) => (
                    <div key={q.id} className="vintage-card p-3 space-y-2">
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full text-start font-amiri text-text-primary text-sm leading-relaxed cursor-pointer hover:text-border-accent transition-colors"
                      >
                        {q.question}
                      </button>
                      <div
                        className={`question-answer transition-all duration-300 ease-in-out ${
                          openQuestionId === q.id ? 'question-answer-enter' : 'question-answer-exit'
                        }`}
                      >
                        <p className="font-amiri text-text-secondary text-sm leading-relaxed border-t border-border-main/30 pt-2">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
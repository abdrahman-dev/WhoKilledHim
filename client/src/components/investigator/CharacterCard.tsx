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
            className="vintage-card gold-glow cursor-pointer px-3 py-1.5 text-xs font-cinzel text-text-secondary hover:text-border-accent transition-colors"
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
            className="vintage-card p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-cinzel text-text-primary">{character.name}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-text-faded hover:text-text-secondary text-xl leading-none cursor-pointer"
              >
                &times;
              </button>
            </div>

            {character.alibi && (
              <div className="vintage-card bg-bg-paper/50 p-4">
                <p className="font-cinzel text-xs text-text-faded mb-1">{t('alibi')}</p>
                <p className="font-amiri text-text-secondary text-sm leading-relaxed">
                  {character.alibi}
                </p>
              </div>
            )}

            {character.questions && character.questions.length > 0 && (
              <div className="space-y-2">
                <p className="font-cinzel text-xs text-text-faded mb-2">
                  {t('interrogate')}
                </p>
                <div className="max-h-[40vh] overflow-y-auto space-y-2 pe-1">
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
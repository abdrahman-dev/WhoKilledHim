import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { GameResult } from '../../types/case.types';
import { useSounds } from '../../sounds/useSounds';

interface ResultScreenProps {
  result: GameResult;
  onNewGame: () => void;
  endingText?: string;
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}

function generatePdf(result: GameResult, title: string) {
  import('jspdf').then(({ default: jsPDF }) => {
    const doc = new jsPDF();
    const { correct, accusation, solution } = result;
    doc.setFontSize(16);
    doc.text('Official Case Report', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Case: ${title}`, 105, 30, { align: 'center' });
    doc.setFontSize(10);
    doc.text(`Suspect: ${accusation.suspectId}`, 20, 45);
    doc.text(`Evidence: ${accusation.evidenceSummary}`, 20, 55);
    doc.text(`Result: ${correct ? 'CORRECT' : 'WRONG'}`, 20, 70);
    doc.text('Timeline:', 20, 85);
    doc.text(solution.timeline.map(e => `${e.time} - ${e.event}`).join('\n'), 20, 95, { maxWidth: 170 });
    doc.text('Explanation:', 20, 115);
    doc.text(solution.explanation, 20, 125, { maxWidth: 170 });
    doc.text(`Time taken: ${formatTime(result.timeTaken)}`, 20, 150);
    doc.text('Confidential — For official use only', 105, 280, { align: 'center' });
    doc.save('case-report.pdf');
  });
}

export default function ResultScreen({ result, onNewGame, endingText }: ResultScreenProps) {
  const { t } = useTranslation();
  const { playSuccess, playFail, playClick } = useSounds();
  const { correct, solution, accusation } = result;

  useEffect(() => {
    if (correct) {
      playSuccess();
    } else {
      playFail();
    }
  }, [correct]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 page-enter">
      <div className="vintage-card p-4 md:p-8 w-full max-w-2xl space-y-6">
        <div className="text-center space-y-4">
          <span className={`${correct ? 'stamp-green' : 'stamp-red'} stamp-appear inline-block`}>
            {correct ? '✓' : '✗'}
          </span>
          <h1 className="font-cinzel text-2xl md:text-3xl text-text-primary">
            {correct ? t('case_solved') : t('wrong_accusation')}
          </h1>
          {correct && (
            <div>
              <p className="font-amiri text-stamp-green text-lg">{accusation.suspectId}</p>
              <p className="font-cinzel text-xs text-accent-gold mt-1">
                {t('motive')}: {t(`motive_${solution.motive}`)}
              </p>
            </div>
          )}
          {!correct && (
            <div>
              <p className="font-amiri text-accent-red-bright text-lg">
                {t('real_culprit')}: {solution.culpritId}
              </p>
              <p className="font-cinzel text-xs text-accent-gold mt-1">
                {t('motive')}: {t(`motive_${solution.motive}`)}
              </p>
            </div>
          )}
        </div>

        <div className="vintage-divider" />

        <div className="font-amiri text-text-secondary space-y-2">
          <div className="vintage-card p-4">
            <p className="text-text-faded text-sm font-cinzel">{t('timeline')}</p>
            <div className="space-y-2 mt-1">
              {solution.timeline.map((e, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-accent-gold font-cinzel text-sm shrink-0">{e.time}</span>
                  <span className="text-text-primary">{e.event}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="vintage-card p-4">
            <p className="text-text-faded text-sm font-cinzel">{t('explanation')}</p>
            <p className="text-text-primary leading-relaxed mt-1">{solution.explanation}</p>
          </div>
          <div className="vintage-card p-4">
            <p className="text-text-faded text-sm font-cinzel">{t('time_taken')}</p>
            <p className="text-text-primary mt-1">{formatTime(result.timeTaken)}</p>
          </div>
          {endingText && (
            <div className="border-t border-border-main/30 pt-4 mt-4 text-center">
              <p className="font-amiri italic text-text-secondary leading-relaxed text-sm">
                {endingText}
              </p>
            </div>
          )}
        </div>

        <div className="vintage-divider" />

        <div className="flex flex-col gap-3">
          <button
            onClick={() => generatePdf(result, '')}
            className="vintage-card gold-glow cursor-pointer px-8 py-3 font-cinzel text-sm text-text-primary hover:text-border-accent transition-colors text-center"
          >
            {t('download_report')}
          </button>
          <button
            onClick={() => { playClick(); onNewGame(); }}
            className="vintage-card gold-glow cursor-pointer px-8 py-3 font-cinzel text-sm text-text-primary hover:text-border-accent transition-colors text-center"
          >
            {t('new_case')}
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface AnalystNotesProps {
  notes: string;
  caseId: string;
}

const STORAGE_PREFIX = 'analyst-notes-';

export default function AnalystNotes({ notes, caseId }: AnalystNotesProps) {
  const { t } = useTranslation();
  const storageKey = `${STORAGE_PREFIX}${caseId}`;
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem(storageKey) ?? '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, text);
    } catch {
      // localStorage may be unavailable
    }
  }, [text, storageKey]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-cinzel text-sm text-text-faded mb-2">{t('office_notes')}</h3>
        <div className="vintage-card p-4">
          <p className="font-amiri text-text-secondary text-sm leading-relaxed">{notes}</p>
        </div>
      </div>

      <div>
        <h3 className="font-cinzel text-sm text-text-faded mb-2">{t('my_notes')}</h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('my_notes')}
          className="w-full vintage-card bg-bg-card text-text-primary font-amiri p-4 min-h-[250px] resize-y"
          dir="auto"
        />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { CipherKey, KeywordEntry } from '../../types/case.types';

interface AnalystSearchProps {
  cipherKeys: CipherKey[];
  keywords: KeywordEntry[];
}

type SearchResult =
  | { type: 'cipher'; data: CipherKey }
  | { type: 'keyword'; data: KeywordEntry };

export default function AnalystSearch({ cipherKeys, keywords }: AnalystSearchProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    const q = query.trim();
    const found: SearchResult[] = [
      ...cipherKeys
        .filter(
          (ck) =>
            ck.label.includes(q) ||
            ck.pattern.includes(q) ||
            ck.explanation.includes(q)
        )
        .map((ck) => ({ type: 'cipher' as const, data: ck })),
      ...keywords
        .filter(
            (kw) =>
              kw.keyword.includes(q) ||
              kw.meaning.includes(q) ||
              kw.context.includes(q)
          )
          .map((kw) => ({ type: 'keyword' as const, data: kw })),
    ];
    setResults(found);
    setSearched(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={t('search_placeholder')}
          className="flex-1 vintage-card bg-bg-card text-text-primary font-amiri p-3"
          dir="auto"
        />
        <button
          onClick={handleSearch}
          className="vintage-card gold-glow cursor-pointer px-5 font-cinzel text-sm text-text-secondary hover:text-border-accent transition-colors shrink-0"
        >
          {t('search_button')}
        </button>
      </div>

      {searched && results.length === 0 && (
        <div className="vintage-card p-4 text-center">
          <p className="font-amiri text-text-faded">{t('not_found')}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="font-cinzel text-xs text-text-faded">{t('result_found')}</p>
          {results.map((r) =>
            r.type === 'cipher' ? (
              <div key={r.data.id} className="vintage-card p-4 space-y-2">
                <h4 className="font-cinzel text-text-primary text-sm">{r.data.label}</h4>
                <div className="bg-bg-primary/50 border border-border-main/30 rounded p-2">
                  <code className="cipher-text text-xs block">{r.data.pattern}</code>
                </div>
                <p className="font-amiri text-text-secondary text-xs leading-relaxed">
                  {r.data.explanation}
                </p>
              </div>
            ) : (
              <div key={r.data.id} className="vintage-card p-4 space-y-2">
                <h4 className="font-amiri text-border-accent font-bold">{r.data.keyword}</h4>
                <p className="font-cinzel text-xs text-text-faded">{t('meaning')}</p>
                <p className="font-amiri text-text-primary text-sm">{r.data.meaning}</p>
                <p className="font-cinzel text-xs text-text-faded">{t('context')}</p>
                <p className="font-amiri text-text-secondary text-sm">{r.data.context}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

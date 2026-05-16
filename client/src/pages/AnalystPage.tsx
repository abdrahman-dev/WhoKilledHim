import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../store/game.store';
import CipherCatalog from '../components/analyst/CipherCatalog';
import KeywordCatalog from '../components/analyst/KeywordCatalog';
import AnalystNotes from '../components/analyst/AnalystNotes';
import VictimProfilePanel from '../components/analyst/VictimProfilePanel';
import DeductionPanel from '../components/analyst/DeductionPanel';
import AnalystSearch from '../components/analyst/AnalystSearch';
import LanguageToggle from '../components/shared/LanguageToggle';
import MuteToggle from '../components/shared/MuteToggle';
import { useSounds } from '../sounds/useSounds';

type Tab = 'ciphers' | 'keywords' | 'notes' | 'victim' | 'deduction';

interface AnalystPageProps {
  onExit: () => void;
}

export default function AnalystPage({ onExit }: AnalystPageProps) {
  const { t } = useTranslation();
  const { playClick } = useSounds();
  const caseData = useGameStore((s) => s.caseData);
  const [activeTab, setActiveTab] = useState<Tab>('ciphers');

  if (!caseData) return null;

  const { analystCatalog } = caseData;

  const tabs: { id: Tab; label: string }[] = [
    { id: 'ciphers', label: t('cipher_catalog') },
    { id: 'keywords', label: t('keyword_catalog') },
    { id: 'notes', label: t('my_notes') },
    { id: 'victim', label: t('victim_profile') },
    { id: 'deduction', label: t('deduction_panel') },
  ];

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto page-enter">
      <header className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => { playClick(); onExit(); }}
            className="font-amiri text-text-faded hover:text-text-secondary transition-colors text-sm cursor-pointer"
          >
            ← {t('back')}
          </button>
          <div className="flex items-center gap-2">
            <MuteToggle />
            <LanguageToggle />
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-cinzel text-2xl text-text-primary">{t('analyst')}</h1>
          <p className="font-amiri text-text-secondary text-sm mt-1">{caseData.title}</p>
        </div>
      </header>

      <div className="mb-6">
        <AnalystSearch
          cipherKeys={analystCatalog.cipherKeys}
          keywords={analystCatalog.keywords}
        />
      </div>

      <div className="flex border-b border-border-main/30 mb-6 overflow-x-auto scrollbar-none whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { playClick(); setActiveTab(tab.id); }}
            className={`font-cinzel text-[0.7rem] md:text-sm px-3 md:px-4 py-3 transition-colors cursor-pointer border-b-2 -mb-[1px] shrink-0 min-h-[44px] ${
              activeTab === tab.id
                ? 'text-border-accent border-border-accent'
                : 'text-text-faded border-transparent hover:text-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'ciphers' && <CipherCatalog />}
        {activeTab === 'keywords' && <KeywordCatalog />}
        {activeTab === 'notes' && (
          <AnalystNotes notes={analystCatalog.notes} caseId={caseData.id} />
        )}
        {activeTab === 'victim' && (
          <VictimProfilePanel profile={analystCatalog.victimProfile} />
        )}
        {activeTab === 'deduction' && <DeductionPanel />}
      </div>
    </div>
  );
}

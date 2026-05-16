import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { useGameStore } from './store/game.store';
import { availableCases } from './cases';
import CasesPage from './pages/CasesPage';
import RoleSelectPage from './pages/RoleSelectPage';
import InvestigatorPage from './pages/InvestigatorPage';
import AnalystPage from './pages/AnalystPage';
import AccusationForm from './components/investigator/AccusationForm';
import ResultScreen from './components/shared/ResultScreen';
import type { Case } from './types/case.types';

export default function App() {
  const { i18n } = useTranslation();
  const phase = useGameStore((s) => s.phase);
  const role = useGameStore((s) => s.role);
  const caseData = useGameStore((s) => s.caseData);
  const result = useGameStore((s) => s.result);
  const reset = useGameStore((s) => s.reset);

  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [view, setView] = useState<'cases' | 'role-select'>('cases');
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.body.style.direction = isArabic ? 'rtl' : 'ltr';
    document.body.style.textAlign = isArabic ? 'right' : 'left';
  }, [isArabic]);

  const handleSelectCase = (caseId: string) => {
    const c = availableCases.find((c) => c.id === caseId);
    if (c) {
      setSelectedCase(c);
      setView('role-select');
    }
  };

  const handleBackToCases = () => {
    setView('cases');
    setSelectedCase(null);
  };

  const handleExit = () => {
    reset();
    setSelectedCase(null);
    setView('cases');
  };

  if (phase === 'result') {
    return <ResultScreen result={result!} onNewGame={handleExit} endingText={caseData?.endingText} />;
  }

  if (phase === 'accusation' && caseData) {
    const suspects = caseData.characters.filter((ch) => ch.role === 'suspect');
    return (
      <AccusationForm
        suspects={suspects}
        onSubmit={(acc) => useGameStore.getState().accuse(acc)}
        onBack={() => useGameStore.getState().setLocation(caseData.locations[0].id)}
      />
    );
  }

  if (phase === 'playing' && role === 'investigator') {
    return <InvestigatorPage onExit={handleExit} />;
  }

  if (phase === 'playing' && role === 'analyst') {
    return <AnalystPage onExit={handleExit} />;
  }

  if (phase === 'role-select' || view === 'role-select') {
    if (!selectedCase && caseData) {
      return (
        <RoleSelectPage
          selectedCase={caseData as Case}
          onBack={handleBackToCases}
        />
      );
    }
    if (selectedCase) {
      return (
        <RoleSelectPage
          selectedCase={selectedCase}
          onBack={handleBackToCases}
        />
      );
    }
  }

  return <CasesPage cases={availableCases} onSelectCase={handleSelectCase} />;
}
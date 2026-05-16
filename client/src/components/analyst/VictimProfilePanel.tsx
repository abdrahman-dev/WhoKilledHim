import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { VictimProfile } from '../../types/case.types';

interface VictimProfilePanelProps {
  profile: VictimProfile;
}

interface CollapsibleSectionProps {
  label: string;
  children: React.ReactNode;
  danger?: boolean;
}

function CollapsibleSection({ label, children, danger }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`vintage-card ${danger ? 'border-accent-red/50' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-start p-4 cursor-pointer flex items-center justify-between gap-2"
      >
        <span className="font-cinzel text-sm text-text-primary">{label}</span>
        <span className={`text-text-faded text-xs transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
          ▶
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-border-main/30 pt-3">
          {danger && (
            <span className="stamp-red text-[0.5rem] mb-2 inline-block">سري</span>
          )}
          <p className="font-amiri text-text-secondary text-sm leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VictimProfilePanel({ profile }: VictimProfilePanelProps) {
  const { t } = useTranslation();

  const sections: { key: keyof VictimProfile; label: string; danger?: boolean }[] = [
    { key: 'background', label: t('background') },
    { key: 'business', label: t('business') },
    { key: 'relationships', label: t('relationships') },
    { key: 'secrets', label: t('secrets'), danger: true },
    { key: 'financialStatus', label: t('financial_status') },
  ];

  return (
    <div className="space-y-3">
      {sections.map(({ key, label, danger }) => (
        <CollapsibleSection key={key} label={label} danger={danger}>
          {profile[key]}
        </CollapsibleSection>
      ))}
    </div>
  );
}

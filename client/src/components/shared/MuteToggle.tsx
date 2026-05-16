import { useState, useEffect } from 'react';
import { Howler } from 'howler';

const STORAGE_KEY = 'sound-muted';

export default function MuteToggle() {
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    Howler.volume(muted ? 0 : 1);
    try {
      localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false');
    } catch {
      // localStorage unavailable
    }
  }, [muted]);

  return (
    <button
      onClick={() => setMuted(!muted)}
      className="vintage-card gold-glow cursor-pointer px-2 py-1 text-sm leading-none text-text-secondary hover:text-border-accent transition-colors"
      title={muted ? 'Unmute' : 'Mute'}
    >
      {muted ? '\u{1F507}' : '\u{1F50A}'}
    </button>
  );
}

import { Howl } from 'howler';

// Replace files in /public/sounds/ with real audio assets
// Sources: freesound.org — search "typewriter", "paper rustle", "wax stamp", "old click"

const sounds: Record<string, Howl> = {};

function getSound(key: string): Howl | null {
  if (!sounds[key]) {
    try {
      sounds[key] = new Howl({
        src: [`/sounds/${key}.mp3`],
        volume: 0.4,
        onloaderror: () => {
          // Silently fail if audio file is missing
        },
      });
    } catch {
      return null;
    }
  }
  return sounds[key];
}

function play(key: string, vol = 0.4) {
  const s = getSound(key);
  if (s) {
    s.volume(vol);
    s.play();
  }
}

export function useSounds() {
  return {
    playClick: () => play('click', 0.4),
    playPaper: () => play('paper', 0.5),
    playStamp: () => play('stamp', 0.6),
    playTypewriter: () => play('typewriter', 0.3),
    playSuccess: () => play('success', 0.5),
    playFail: () => play('fail', 0.5),
  };
}

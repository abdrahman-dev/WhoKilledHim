import { create } from 'zustand'

let audioCtx: AudioContext | null = null
let ambientSource: AudioBufferSourceNode | null = null
let ambientGain: GainNode | null = null

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  if (audioCtx.state === 'suspended') {
    void audioCtx.resume()
  }
  return audioCtx
}

function playTone(freq: number, duration: number, type: OscillatorType, volume: number = 0.08) {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.value = freq
  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + duration)
}

function playSweep(startFreq: number, endFreq: number, duration: number, type: OscillatorType, volume: number = 0.06) {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(startFreq, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration)
  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + duration)
}

interface AudioState {
  isMuted: boolean
  toggleMute: () => void
  playClick: () => void
  playPaper: () => void
  playStep: () => void
  playDiscover: () => void
  playStamp: () => void
  playSuccess: () => void
  playFail: () => void
  playPageTurn: () => void
  playDoorCreak: () => void
  playKeys: () => void
  playTick: () => void
  playFireCrackle: () => void
  startAmbient: () => void
  stopAmbient: () => void
}

export const useAudioStore = create<AudioState>()((set, get) => ({
  isMuted: false,

  toggleMute: () => set(s => ({ isMuted: !s.isMuted })),

  playClick: () => {
    if (get().isMuted) return
    playTone(800, 0.04, 'triangle', 0.06)
  },

  playPaper: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const bufSize = Math.floor(ctx.sampleRate * 0.08)
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.max(0, 1 - i / bufSize)
    }
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 1400
    filter.Q.value = 0.5
    const gain = ctx.createGain()
    gain.gain.value = 0.03
    source.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    source.start()
  },

  playStep: () => {
    if (get().isMuted) return
    playTone(200, 0.06, 'sine', 0.05)
  },

  playDiscover: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(200, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.3)
    gain.gain.setValueAtTime(0.07, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.3)
  },

  playStamp: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.type = 'sine'
    osc1.frequency.value = 80
    gain1.gain.setValueAtTime(0.18, ctx.currentTime)
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.start()
    osc1.stop(ctx.currentTime + 0.1)

    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.type = 'square'
    osc2.frequency.value = 600
    gain2.gain.setValueAtTime(0.05, ctx.currentTime + 0.02)
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.start(ctx.currentTime + 0.02)
    osc2.stop(ctx.currentTime + 0.1)
  },

  playSuccess: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const notes = [261.63, 329.63, 392.00]
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const start = ctx.currentTime + i * 0.17
      gain.gain.setValueAtTime(0.1, start)
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.17)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(start)
      osc.stop(start + 0.17)
    })
  },

  playFail: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(392, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(311, ctx.currentTime + 0.4)
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.4)
  },

  playPageTurn: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const bufSize = Math.floor(ctx.sampleRate * 0.06)
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.max(0, 1 - i / bufSize)
    }
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 1800
    filter.Q.value = 0.6
    const gain = ctx.createGain()
    gain.gain.value = 0.025
    source.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    source.start()
  },

  playDoorCreak: () => {
    if (get().isMuted) return
    playSweep(150, 80, 0.2, 'square', 0.04)
  },

  playKeys: () => {
    if (get().isMuted) return
    playTone(1400, 0.02, 'square', 0.03)
  },

  playTick: () => {
    if (get().isMuted) return
    playTone(1000, 0.03, 'sine', 0.02)
  },

  playFireCrackle: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    const bufSize = Math.floor(ctx.sampleRate * 0.7)
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.max(0, 1 - i / bufSize) * 0.6
    }
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 500
    filter.Q.value = 2
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.015, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7)
    source.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    source.start()
  },

  startAmbient: () => {
    if (get().isMuted) return
    const ctx = getCtx()
    if (ambientSource) return

    const bufSize = Math.floor(ctx.sampleRate * 2)
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.015
    }

    ambientSource = ctx.createBufferSource()
    ambientSource.buffer = buffer
    ambientSource.loop = true

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 180

    ambientGain = ctx.createGain()
    ambientGain.gain.value = 0.025

    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = 55
    const oscGain = ctx.createGain()
    oscGain.gain.value = 0.012

    ambientSource.connect(filter)
    filter.connect(ambientGain)
    osc.connect(oscGain)
    oscGain.connect(ambientGain)
    ambientGain.connect(ctx.destination)
    ambientSource.start()
    osc.start()
  },

  stopAmbient: () => {
    if (ambientSource) {
      try { ambientSource.stop() } catch { /* ignore */ }
      ambientSource = null
    }
    ambientGain = null
  },
}))

import { store } from './storage/store'

/** Tiny synthesized sound effects (no audio files). */

let ctx: AudioContext | null = null

function enabled(): boolean {
  const s = store.get()
  return s.profiles.find((p) => p.id === s.activeProfileId)?.settings.soundEffects ?? true
}

function tone(freqs: number[], duration = 0.12, gap = 0.09, volume = 0.08) {
  if (!enabled() || typeof AudioContext === 'undefined') return
  try {
    ctx ??= new AudioContext()
    const start = ctx.currentTime + 0.01
    freqs.forEach((f, i) => {
      const osc = ctx!.createOscillator()
      const gain = ctx!.createGain()
      osc.type = 'sine'
      osc.frequency.value = f
      const t = start + i * gap
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(volume, t + 0.015)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration)
      osc.connect(gain).connect(ctx!.destination)
      osc.start(t)
      osc.stop(t + duration + 0.02)
    })
  } catch {
    // Audio isn't essential.
  }
}

export const sfx = {
  correct: () => tone([660, 880]),
  wrong: () => tone([220, 196], 0.18, 0.12, 0.06),
  complete: () => tone([523, 659, 784, 1047], 0.22, 0.11),
}

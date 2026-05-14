interface StampProps {
  text: string
  variant: 'red' | 'blue' | 'green'
  rotate?: number
}

export default function Stamp({ text, variant, rotate = 0 }: StampProps) {
  return (
    <span
      className={`stamp stamp-${variant}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text}
    </span>
  )
}

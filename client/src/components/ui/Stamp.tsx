import { useState, type CSSProperties } from 'react'

interface StampProps {
  text: string
  variant: 'red' | 'blue' | 'green'
  rotate?: number
  animated?: boolean
}

export default function Stamp({ text, variant, rotate = 0, animated }: StampProps) {
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    if (!animated) return
    setAnimating(true)
    setTimeout(() => setAnimating(false), 350)
  }

  const style: CSSProperties = {
    transform: `rotate(${rotate}deg)`,
    cursor: animated ? 'pointer' : undefined,
  }

  return (
    <span
      className={`stamp stamp-${variant} ${animating ? 'stamp-animate' : ''}`}
      style={style}
      onClick={handleClick}
    >
      {text}
    </span>
  )
}

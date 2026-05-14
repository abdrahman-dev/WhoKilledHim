import type { ReactNode, CSSProperties } from 'react'
import { motion } from 'framer-motion'

interface PaperCardProps {
  children: ReactNode
  tilt?: 1 | 2 | 3 | 4
  dark?: boolean
  className?: string
  clip?: boolean
  style?: CSSProperties
}

export default function PaperCard({
  children,
  tilt,
  dark,
  className = '',
  clip,
  style,
}: PaperCardProps) {
  const tiltClass = tilt ? `tilt-${tilt}` : ''
  const darkClass = dark ? 'paper-dark' : ''

  return (
    <motion.div
      className={`paper ${tiltClass} ${darkClass} ${className}`}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
      style={style}
    >
      {clip && <div className="clip" />}
      {children}
    </motion.div>
  )
}

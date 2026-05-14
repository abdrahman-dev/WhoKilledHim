import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'stamp-red' | 'stamp-blue' | 'stamp-green' | 'ghost' | 'paper'
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'paper',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'min-h-[44px] px-4 text-sm stamped uppercase tracking-wider transition-all duration-150 inline-flex items-center justify-center gap-2'

  const variants: Record<string, string> = {
    'stamp-red': 'stamp stamp-red cursor-pointer hover:opacity-100',
    'stamp-blue': 'stamp stamp-blue cursor-pointer hover:opacity-100',
    'stamp-green': 'stamp stamp-green cursor-pointer hover:opacity-100',
    ghost: 'stamp cursor-pointer hover:opacity-100 border-[var(--ink4)] text-[var(--ink4)]',
    paper: 'paper border border-[var(--paper3)] text-[var(--ink)] hover:shadow-lg cursor-pointer',
  }

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.paper} ${fullWidth ? 'w-full' : ''} ${
        props.disabled ? 'opacity-40 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

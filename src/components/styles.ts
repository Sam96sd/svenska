export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-strong shadow-sm',
  secondary: 'bg-surface text-ink border border-line hover:bg-surface-2',
  ghost: 'text-ink hover:bg-surface-2',
  accent: 'bg-accent text-on-accent hover:brightness-95 shadow-sm',
  danger: 'bg-danger text-white hover:brightness-95 dark:text-bg',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm rounded-xl gap-1.5',
  md: 'h-11 px-4 text-[15px] rounded-2xl gap-2',
  lg: 'h-14 px-6 text-base rounded-2xl gap-2',
}

export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md') {
  return cx(
    'inline-flex items-center justify-center font-semibold transition-[background-color,transform,filter] duration-150 active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 select-none',
    variantClass[variant],
    sizeClass[size],
  )
}

import { Slot } from '@radix-ui/react-slot'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const boxVariants = cva('rounded-md p-3 bg-[var(--box-primary-bg)] ', {
  variants: {
    variant: { default: {} },
    direction: {
      row: 'flex flex-row',
      column: 'flex flex-col',
    },
  },
  defaultVariants: { variant: 'default', direction: 'column' },
})

export function Box({
  className,
  variant,
  direction,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof boxVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot='box'
      className={cn(boxVariants({ variant, direction }), className)}
      {...props}
    />
  )
}

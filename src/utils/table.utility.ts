export const getChangeColor = (change: string) => {
  if (change.startsWith('+')) return 'text-[var(--primary)]'
  if (change.startsWith('-')) return 'text-red-500'
  return 'text-gray-500'
}

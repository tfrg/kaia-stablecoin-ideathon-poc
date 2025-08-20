import { Circle } from 'lucide-react'

interface AutomationSettingItemProps {
  title: string
  status: string
  isActive: boolean
}

export function AutomationSettingItem({
  title,
  status,
  isActive,
}: AutomationSettingItemProps): React.JSX.Element {
  return (
    <div className='p-3 rounded-md bg-gray-800/50'>
      <div className='flex items-center space-x-3'>
        <Circle
          className={`h-4 w-4 ${isActive ? 'fill-lime-400 text-lime-400' : 'fill-gray-500 text-gray-500'}`}
        />
        <span className='text-sm text-gray-300'>{title}</span>
      </div>
      <span className='text-sm text-gray-400'>{status}</span>
    </div>
  )
}

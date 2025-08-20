import { AutomationSetting } from '@/types/dashboard'

export const automationSettingsData: AutomationSetting[] = [
  {
    id: 1,
    title: '자동 리밸런싱',
    status: '활성화',
    isActive: true,
  },
  {
    id: 2,
    title: '자동 납입 설정',
    status: '매월 5일',
    isActive: true,
  },
  {
    id: 3,
    title: '목표 기반 전략 조정',
    status: '활성화',
    isActive: true,
  },
]

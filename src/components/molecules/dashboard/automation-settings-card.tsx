import { AutomationSetting } from '@/types/dashboard'

import { AutomationSettingItem } from '@/components/molecules/dashboard/automation-settings-item'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AutomationSettingsCardProps {
  data: AutomationSetting[]
}

export function AutomationSettingsCard({
  data,
}: AutomationSettingsCardProps): React.JSX.Element {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>자동화 설정</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 space-y-3'>
        {data.map((setting) => (
          <AutomationSettingItem
            key={setting.id}
            title={setting.title}
            status={setting.status}
            isActive={setting.isActive}
          />
        ))}
      </CardContent>
    </Card>
  )
}

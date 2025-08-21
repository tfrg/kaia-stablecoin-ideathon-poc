import { getChangeColor } from '@/utils'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AssetData } from '@/types/assets'

interface AssetListTableProps {
  data: AssetData[]
}

const TABLE_HEADERS = [
  '자산',
  '가격',
  '24시간 변동',
  '7일 변동',
  '보유량',
  '가치',
  '비중',
  'APY/수익률',
]

export function AssetListTable({ data }: AssetListTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TABLE_HEADERS.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((asset) => (
          <TableRow key={asset.id}>
            <TableCell className='font-medium'>
              <div className='flex items-center gap-2'>
                {asset.icon}
                <span>
                  {asset.name} ({asset.symbol})
                </span>
              </div>
            </TableCell>
            <TableCell>{asset.price}</TableCell>
            <TableCell className={getChangeColor(asset.change24h)}>
              {asset.change24h}
            </TableCell>
            <TableCell className={getChangeColor(asset.change7d)}>
              {asset.change7d}
            </TableCell>
            <TableCell>{asset.holdings}</TableCell>
            <TableCell>{asset.value}</TableCell>
            <TableCell>{asset.weight}</TableCell>
            <TableCell
              className={
                asset.performance.includes('+') ? 'text-[var(--primary)]' : ''
              }
            >
              {asset.performance}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

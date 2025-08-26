import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

import { Header } from '@/components/layout/header'

export default function Landing() {
  return (
    <div className='w-screen'>
      <div className='relative h-full w-full'>
        <Header alwaysViewLogo={true} />

        {/* Background gradient */}
        <div
          className='pointer-events-none absolute h-full w-full'
          style={{
            background:
              'linear-gradient(180.15deg, rgba(255, 255, 255, 0.06) 0.16%, rgba(10, 10, 10, 0.06) 99.89%)',
          }}
        ></div>

        {/* 메인 섹션 */}
        <main className='font-poppins mt-20 px-6'>
          {/* 헤드라인 섹션 */}
          <div className='relative mb-16 text-center'>
            {/* <div className="absolute inset-0 after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] after:bg-[length:20px_20px] after:content-['']"></div> */}
            <div className='hidden md:block'>
              <h1 className='mb-1 text-3xl font-bold'>
                The best{' '}
                <span className='text-[var(--primary)]'>KRW Stablecoin</span>{' '}
                built on
              </h1>
              <h1 className='mb-6 text-3xl font-bold'>Kaia blockchain</h1>
            </div>

            <div className='md:hidden'>
              <h1 className='text-3xl leading-tight font-bold'>
                The best <span className='text-[var(--primary)]'>KRW</span>
              </h1>
              <h1 className='text-3xl leading-tight font-bold'>
                <span className='text-[var(--primary)]'>Stablecoin</span> built
                on
              </h1>
              <h1 className='mb-6 text-3xl leading-tight font-bold'>
                Kaia blockchain
              </h1>
            </div>
            <p className='mx-auto mb-8 max-w-[420px] text-[12px] text-white'>
              Trade, save, and grow your Korean Won with AI-driven robo-advisor
              on the most advanced Kaia blockchain ecosystem.
            </p>

            {/* CTA */}
            <Link to='/ai-assistant'>
              <button className='mx-auto flex items-center rounded-md bg-[var(--primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:bg-[var(--primary-hover)]'>
                Analyze Now
                <ChevronRight size={18} className='ml-2' />
              </button>
            </Link>
          </div>

          {/* 기능 카드 섹션 */}
          <div className='mx-auto grid max-w-3xl gap-6'>
            {/* AI 로보 어드바이저 */}
            <div className='rounded-lg bg-[var(--surface-03)] p-6 text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-badge)]'>
                <img src='/img/landing/advisor.svg' />
              </div>
              <h3 className='mb-2 font-semibold'>AI Robo-Advisor</h3>
              <p className='text-sm text-gray-300'>
                Get personalized KRW investment strategies based on your
                financial goals and risk preferences with automated portfolio
                management.
              </p>
            </div>

            {/* Cash Sweep Program */}
            <div className='rounded-lg bg-[var(--surface-03)] p-6 text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-badge)]'>
                <img src='/img/landing/sweep-program.svg' />
              </div>
              <h3 className='mb-2 font-semibold'>Cash Sweep Program</h3>
              <p className='text-sm text-gray-300'>
                Automatically convert idle KRW into yield-generating stablecoin
                investments with instant liquidity and real-time earnings
                tracking.
              </p>
            </div>

            {/* Goals-Based Investing */}
            <div className='rounded-lg bg-[var(--surface-03)] p-6 text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-badge)]'>
                <img src='/img/landing/investing.svg' />
              </div>
              <h3 className='mb-2 font-semibold'>Goals-Based Investing</h3>
              <p className='text-sm text-gray-300'>
                Set specific financial targets like emergency funds, home
                savings, or retirement and let AI optimize your KRW allocation
                automatically.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

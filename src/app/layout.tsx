import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { pretendard } from '@/asset/font/font'
import '@/style/globals.css'

export const metadata: Metadata = {
  title: '유월의 블로그',
  description: '유월의 블로그입니다.',
}

const RootLayout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => (
  <html lang="ko-KR">
    <body className={pretendard.variable}>
      {children}
      <Analytics />
    </body>
    <GoogleAnalytics gaId="G-QER49BSMV6" />
  </html>
)

export default RootLayout

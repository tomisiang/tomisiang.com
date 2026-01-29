import './global.css'
import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import Runner from '@/modules/Runner'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tom Isiang',
  description: 'Software Developer',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={cn(
          openSans.className,
          'bg-gradient-to-b from-[#ECECEC] to-[#DBDDE0]',
          'text-[#32424F]'
        )}
      >
        <Runner />
        {children}
      </body>
    </html>
  )
}

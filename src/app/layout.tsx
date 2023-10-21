import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import StyledComponents from '@/styles/theme'

import { Open_Sans } from 'next/font/google'
import { SplashScreen } from '@/components'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tom Isiang',
  description: 'Software Developer',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <StyledComponents>
          <SplashScreen>{children}</SplashScreen>
        </StyledComponents>
      </body>
    </html>
  )
}

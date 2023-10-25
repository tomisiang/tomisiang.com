'use client'

import { type PropsWithChildren } from 'react'
import { useIsMobileListener, useScrollListener } from '@/global-hooks'
import { Main as StyledMain } from '@/styles/cssComponents'

export default function Main({ children }: PropsWithChildren) {
  useScrollListener()
  useIsMobileListener()

  return <StyledMain id='main'>{children}</StyledMain>
}

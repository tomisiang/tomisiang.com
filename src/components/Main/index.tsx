'use client'

import { type PropsWithChildren, useCallback } from 'react'
import { useEventListener, useNavEvents } from '@/global-hooks'
import { Main as StyledMain } from '@/styles/cssComponents'
import { useUIStore } from '@/global-stores'

export default function Main({ children }: PropsWithChildren) {
  const { setIsMobile } = useUIStore()

  // Sets isMobile
  useEventListener(
    useCallback(() => {
      if (typeof window === 'undefined') return

      setIsMobile(window.innerWidth <= 768)
    }, [setIsMobile]),
    { type: 'resize' }
  )

  useNavEvents()

  return <StyledMain id='main'>{children}</StyledMain>
}

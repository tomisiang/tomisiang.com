'use client'

import { useIsMobileListener, useScrollListener } from '@/global-hooks'

export default function Runner() {
  useScrollListener()
  useIsMobileListener()
  return null
}

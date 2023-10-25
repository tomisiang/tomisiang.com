import { useUIStore } from '@/global-stores'
import useEventListener from './useEventListener'
import { useCallback } from 'react'
import { OUTER_BORDER_WIDTH, OUTER_MARGIN } from '@/constants/config'

/**
 * Handles header resize and nav switching when scrolling through sections
 */
export const useScrollListener = () => {
  const { isScroll, setIsScroll, setSelectedTab, navHeight } = useUIStore(
    state => ({ ...state, navHeight: state.getNavHeight() })
  )

  const main =
    typeof window !== 'undefined' ? document.getElementById('main') : null

  // Sets isScroll for header resize
  useEventListener(
    useCallback(() => {
      if (!main) return

      if (main.scrollTop > 0 && !isScroll) {
        setIsScroll(true)
      } else if (main.scrollTop === 0 && isScroll) {
        setIsScroll(false)
      }
    }, [isScroll, main, setIsScroll]),
    { type: 'scroll', target: main }
  )

  // Sets current selected nav
  useEventListener(
    useCallback(() => {
      if (!main) return
      // Get the positions of all sections
      const sections = document.querySelectorAll('.section')

      // Find the current active section
      for (let i = 0; i <= sections.length; i++) {
        const section: Element | undefined = sections[i]

        if (!section) continue

        const { bottom } = section.getBoundingClientRect()

        if (bottom > navHeight + OUTER_BORDER_WIDTH + OUTER_MARGIN + 1) {
          setSelectedTab(i)
          break
        }
      }
    }, [main, navHeight, setSelectedTab]),
    { type: 'scroll', target: main }
  )
}

/**
 * Handles setting isMobile
 */
export const useIsMobileListener = () => {
  const setIsMobile = useUIStore(state => state.setIsMobile)

  // Sets isMobile
  useEventListener(
    useCallback(() => {
      if (typeof window === 'undefined') return

      setIsMobile(window.innerWidth <= 768)
    }, [setIsMobile]),
    { type: 'resize' }
  )
}

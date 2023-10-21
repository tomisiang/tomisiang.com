import { useUIStore } from '@/global-stores'
import useEventListener from './useEventListener'
import { useCallback } from 'react'
import { OUTER_BORDER_WIDTH, OUTER_MARGIN } from '@/constants/config'

/**
 * Handles Nav switching when scrolling through sections
 */
const useNavEvents = () => {
  const { setSelectedTab, navHeight } = useUIStore(state => ({
    setSelectedTab: state.setSelectedTab,
    navHeight: state.getNavHeight(),
  }))

  const main =
    typeof window !== 'undefined' ? document.getElementById('main') : null

  const handleScroll = useCallback(() => {
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
  }, [main, navHeight, setSelectedTab])

  useEventListener(handleScroll, { type: 'scroll', target: main })
}

export default useNavEvents

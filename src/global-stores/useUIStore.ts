import { NAV_HEIGHT } from '@/constants/config'
import { create } from 'zustand'
import { combine, devtools } from 'zustand/middleware'
const { DESKTOP, MOBILE } = NAV_HEIGHT

interface UIStoreState {
  selectedTab: number
  isScroll: boolean
  isMobile: boolean
  isNavTouched: boolean
}

const defaultState: UIStoreState = {
  selectedTab: 0,
  isScroll: false,
  isMobile: false,
  isNavTouched: false,
}

/**
 * Global Store for UI-related states
 */
const useUIStore = create(
  devtools(
    combine(defaultState, (set, get) => ({
      setSelectedTab: (index: number) => {
        set({ selectedTab: index })
      },
      setIsScroll: (isScroll: boolean) => {
        set({ isScroll })
      },
      getNavHeight: () => {
        if (get().isMobile) {
          return get().isScroll ? MOBILE.SCROLL : MOBILE.NOT_SCROLL
        }

        return get().isScroll ? DESKTOP.SCROLL : DESKTOP.NOT_SCROLL
      },
      setIsMobile: (isMobile: boolean) => {
        set({ isMobile })
      },
      /** Adds bottom padding if nav is touched */
      setIsNavTouched: () => {
        set({ isNavTouched: true })
      },
    }))
  )
)

export default useUIStore

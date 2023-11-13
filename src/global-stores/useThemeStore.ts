import { create } from 'zustand'
import { combine, devtools } from 'zustand/middleware'

interface ThemeStoreState {
  id: 'LIGHT' | 'DARK'
}

const defaultState: ThemeStoreState = {
  id: 'LIGHT',
}

/**
 * Global Store for Theme.
 * TODO: Persist. Current solution introduces flickering on app start. Could be a limitation of Styled-Components
 */
const useThemeStore = create(
  devtools(
    combine(defaultState, set => ({
      toggle: () => {
        set(prev => ({
          ...prev,
          id: prev.id === 'LIGHT' ? 'DARK' : 'LIGHT',
        }))
      },
    }))
  )
)

export default useThemeStore

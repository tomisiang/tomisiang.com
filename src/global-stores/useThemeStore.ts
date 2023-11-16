import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

interface ThemeStoreState {
  id: 'LIGHT' | 'DARK'
}

const defaultState: ThemeStoreState = {
  id: 'LIGHT',
}

/**
 * Global Store for Theme.
 */
const useThemeStore = create(
  devtools(
    persist(
      combine(defaultState, set => ({
        toggle: () => {
          set(prev => ({
            ...prev,
            id: prev.id === 'LIGHT' ? 'DARK' : 'LIGHT',
          }))
        },
      })),
      { name: 'theme' }
    )
  )
)

export default useThemeStore

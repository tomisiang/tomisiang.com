import { DependencyList, useEffect } from 'react'

interface EventParams {
  type: 'resize' | 'scroll'
  target?: (Window & typeof globalThis) | Element | null
}

/**
 * Custom hook used to run a callback in a specified event listener
 * @param callback
 * @param deps
 */
const useEventListener = (
  callback: () => void,
  params: EventParams,
  deps?: DependencyList
) => {
  const { type, target = typeof window !== 'undefined' ? window : null } =
    params

  useEffect(() => {
    if (!target) return

    callback()

    target.addEventListener(type, callback)

    return () => {
      target.removeEventListener(type, callback)
    }
  }, [callback, target, type, deps])
}

export default useEventListener

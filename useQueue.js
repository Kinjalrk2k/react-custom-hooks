import { useCallback, useState } from "react";

/**
 *
 * @param {Array} initialValue
 */
export default function useQueue(initialValue) {

  const [state, setState] = useState(initialValue)

  const enqueue = useCallback((value) => {

    setState(prev => [...prev, value])

  }, [])

  const dequeue = useCallback(() => {

    setState(([first, ...rest]) => rest)

  }, [])


  return {
    enqueue,
    dequeue,
    get first() {
      return state[0]
    },
    get last() {
      return state.length === 0 ? undefined : state[state.length - 1]
    },
    get isEmpty() {
      return state.length === 0
    },
    get state() {
      return state
    },
    get size() {
      return state.length
    }
  }

}
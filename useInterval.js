import { useCallback, useRef,useEffect } from "react";

/**
 *
 * @param {Function} callback
 * @param {number} interval
 * @returns {{clear:Function, reset:Function}} `clear` function clears the Interval and `reset` function restarts the setInterval with the given interval
 */
export default function useInterval(callback, interval) {

  const callbackRef = useRef(callback)
  const intervalRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    intervalRef.current = setInterval(callbackRef.current, interval)
  }, [interval])

  const clear = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {

    set()
    return clear
  }, [interval, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [set, clear])

  return { clear, reset }
}
// eslint-disable-next-line no-unused-vars
type ScrollCallback = (scrollY: number) => void

/**
 * Example usage:
 * import { onScroll } from '~/utils/scroll'
 * useEffect(() => {
 *   return onScroll((scrollPosition) => doSomething(scrollPosition))
 * }, [onScroll])
 */

export const onScroll = (callback: ScrollCallback) => {
  const updatePosition = () => {
    const scrollY =
      window.scrollY === undefined ? window.pageYOffset : window.scrollY
    callback(scrollY)
  }
  window.addEventListener('scroll', updatePosition)
  return () => window.removeEventListener('scroll', updatePosition)
}

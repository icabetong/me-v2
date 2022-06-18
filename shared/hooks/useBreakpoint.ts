import { useEffect, useState } from 'react'

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

export default function useBreakpoint(breakpoint: Breakpoint) {
  const [isMatch, setMatch] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${getScreenWidth(breakpoint)})`)
    if (media.matches !== isMatch) {
      setMatch(media.matches)
    }
    const listener = () => {
      setMatch(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [breakpoint])

  return isMatch
}

function getScreenWidth(breakpoint: Breakpoint) {
  switch(breakpoint) {
    case 'sm': return '640px'
    case 'md': return '768px'
    case 'lg': return '1024px'
    case 'xl': return '1280px'
    case '2xl': return '1536px'
  }
}
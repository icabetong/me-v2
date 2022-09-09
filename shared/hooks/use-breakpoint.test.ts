import { queryAllByAltText, renderHook } from '@testing-library/react'
import useBreakpoint from './use-breakpoint'

let matchMedia = window.matchMedia

describe('useBreakpoint', () => {
  it('should return true when the matchMedia query matches', () => {
    Object.defineProperty(window, 'matchMedia', {
      writeable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })

    const { result } = renderHook(() => useBreakpoint('sm'))
    expect(result.current).toBe(true)
  })
}) 
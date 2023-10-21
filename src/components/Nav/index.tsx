'use client'

import { NAV_ITEMS } from '@/constants/strings'
import * as S from './styles'
import { useRef, useCallback } from 'react'
import { useEventListener } from '@/global-hooks'
import { useUIStore } from '@/global-stores'
import { OUTER_BORDER_WIDTH, OUTER_MARGIN } from '@/constants/config'

export default function Nav() {
  const { selectedTab, navHeight, isMobile, setIsNavTouched, isNavTouched } =
    useUIStore(state => ({ ...state, navHeight: state.getNavHeight() }))
  const navRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  /**
   * Scrolls to a section.
   * I used querySelector (in stead of useRef) simply because it's easier and cleaner to implement.
   * @param index
   */
  const handleNavLinkClick = useCallback(
    (index: number) => {
      const main = document.getElementById('main')
      const sections = document.querySelectorAll(`.section`)

      if (!main) return
      if (!sections.length) return

      setIsNavTouched()

      const targetSection = sections[index] as HTMLElement

      const desktopMargin = isMobile ? 0 : OUTER_BORDER_WIDTH
      const offSetTop =
        targetSection.offsetTop -
        (navHeight + OUTER_MARGIN + desktopMargin + 20)

      const scrollOptions: ScrollToOptions = {
        top: index === 0 ? 0 : offSetTop,
        behavior: 'smooth',
      }

      if (isNavTouched) {
        return main.scrollTo(scrollOptions)
      }

      // Waits for the bottom padding to be added
      setTimeout(() => {
        main.scrollTo(scrollOptions)
      }, 100)
    },
    [isMobile, isNavTouched, navHeight, setIsNavTouched]
  )

  useEventListener(
    useCallback(() => {
      if (navRef.current && indicatorRef.current) {
        const activeNavLink = navRef.current.children[selectedTab]
          .firstChild as HTMLElement
        indicatorRef.current.style.width = `${activeNavLink.offsetWidth}px`
        indicatorRef.current.style.transform = `translateX(${activeNavLink.offsetLeft}px)`
      }
    }, [selectedTab]),
    { type: 'scroll' }
  )

  return (
    <S.Nav>
      <S.NavUl ref={navRef}>
        {NAV_ITEMS.map((navItem, index) => (
          <S.NavLi key={index}>
            <S.NavButton onClick={() => handleNavLinkClick(index)}>
              {navItem.text}
            </S.NavButton>
          </S.NavLi>
        ))}
      </S.NavUl>
      <S.Indicator ref={indicatorRef} />
    </S.Nav>
  )
}

'use client'

import { FOOTER } from '@/constants/strings'
import * as S from './styles'
import { useCallback, useState } from 'react'
import { useEventListener } from '@/global-hooks'
import { OUTER_MARGIN } from '@/constants/config'
import { useUIStore } from '@/global-stores'

const footerString = FOOTER.replace(
  /\{0\}/,
  new Date().getFullYear().toString()
)

export default function Footer() {
  const [bottomFiller, setBottomFiller] = useState(0)
  const isNavTouched = useUIStore(state => state.isNavTouched)

  const computeBottomFiller = useCallback(() => {
    if (typeof window === 'undefined') return
    if (!isNavTouched) return

    const main = document.getElementById('main')
    const mainHeight = main?.clientHeight ?? 0

    const lastSection = document.querySelector('.section:last-of-type')
    const lastSectionHeight = lastSection?.clientHeight ?? 0

    const footer = document.querySelector('footer')
    const footerHeight = footer?.clientHeight ?? 0

    if (mainHeight > lastSectionHeight) {
      return setBottomFiller(
        mainHeight - (lastSectionHeight + footerHeight) + OUTER_MARGIN
      )
    }

    setBottomFiller(0)
  }, [isNavTouched])

  useEventListener(computeBottomFiller, { type: 'resize' })

  return (
    <>
      <S.FooterMobile id='footer'>
        <p>{footerString}</p>
      </S.FooterMobile>
      <S.FooterDesktop>
        <p>{footerString}</p>
      </S.FooterDesktop>
      <S.BottomFiller $bottomPadding={bottomFiller} />
    </>
  )
}

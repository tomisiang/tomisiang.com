'use client'

import { FOOTER } from '@/constants/strings'
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
      {/* Mobile */}
      <footer
        id='footer'
        className='text-sm flex justify-between py-5 xl:hidden'
      >
        <p>{footerString}</p>
      </footer>
      {/* Desktop */}
      <footer className='text-sm hidden xl:flex absolute left-0 bottom-5 w-[calc((100vw-680px)/2)] pr-5 xl:justify-center 2xl:justify-end 2xl:pr-0'>
        <p className='bg-[#ECECEC] border-[1px] border-solid border-[#D5D5D5] py-[5px] px-[10px] rounded-[10px]'>
          {footerString}
        </p>
      </footer>
      <div style={{ paddingBottom: bottomFiller }} />
    </>
  )
}

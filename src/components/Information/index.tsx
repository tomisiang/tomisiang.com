'use client'

import * as S from './styles'
import Image from 'next/image'
import { getHasLeftLine } from '@/utils'
import {
  useMemo,
  useState,
  useRef,
  useCallback,
  type MutableRefObject,
} from 'react'
import { useEventListener, useOnClickOutside } from '@/global-hooks'
import { useUIStore } from '@/global-stores'
import Modal from '../Modal'
import type { Duration } from '@/types'

interface InformationProps extends React.HTMLAttributes<HTMLDivElement> {
  subInfo: string
  info: string
  infoTooltip?: React.ReactNode
  date: Duration | string
  leftLine?: {
    length: number
    index: number
  }
  imageUrl?: string
}

/**
 * Generic 3 Rows Information Component
 */
export default function Information(props: InformationProps) {
  const { subInfo, info, date, leftLine, imageUrl, infoTooltip, ...rest } =
    props

  const [isOpened, setIsOpened] = useState(false)
  const toggle = () => setIsOpened(prev => !prev)

  const toggleRef = useRef(null)
  useOnClickOutside(toggleRef, () => setIsOpened(false))

  const formattedDate = useMemo(() => {
    if (typeof date === 'string') return date

    return date.from + ' - ' + (date.to ?? 'Present')
  }, [date])

  const hasLeftLine = useMemo(() => {
    if (!leftLine) return false

    return getHasLeftLine(leftLine.length, leftLine.index)
  }, [leftLine])

  const containerRef = useRef<HTMLDivElement | null>(null)

  const hasTooltip = !!infoTooltip
  const hasImage = !!imageUrl

  return (
    <S.Information {...rest} $hasLeftLine={hasLeftLine} ref={containerRef}>
      <LeftGraphics hasLeftLine={hasLeftLine} />
      <div className='left'>
        <S.SubInfo>{subInfo}</S.SubInfo>
        <S.InfoContainer ref={toggleRef}>
          <S.Info
            onClick={hasTooltip ? toggle : undefined}
            $hasTooltip={hasTooltip}
          >
            {info}
          </S.Info>
          {hasTooltip && (
            <ToolTipComponent infoRef={containerRef} isOpened={isOpened}>
              {infoTooltip}
            </ToolTipComponent>
          )}
        </S.InfoContainer>
        <S.Date>{formattedDate}</S.Date>
      </div>
      {hasImage && <ImageComponent imageUrl={imageUrl} />}
    </S.Information>
  )
}

function LeftGraphics({ hasLeftLine }: { hasLeftLine: boolean }) {
  return (
    <S.LeftGraphics>
      <S.Bullet />
      {hasLeftLine && <S.InformationConnector />}
    </S.LeftGraphics>
  )
}

interface ToolTipComponentProps {
  children: React.ReactNode
  isOpened: boolean
  infoRef: MutableRefObject<HTMLDivElement | null>
}

function ToolTipComponent(props: ToolTipComponentProps) {
  const { children, isOpened, infoRef } = props
  const isMobile = useUIStore(state => state.isMobile)

  const [ttUnderlineMaxWidth, setTtUnderlineMaxWidth] = useState(0)
  const [ttContentWidth, setTtContentWidth] = useState(0)

  const setupInfoToolTip = useCallback(() => {
    if (typeof window === 'undefined') return

    const containerClientWidth = infoRef?.current?.clientWidth ?? 0
    const underlineMult = isMobile ? 0.35 : 0.5
    const contentMult = isMobile ? 0.65 : 0.5

    setTtUnderlineMaxWidth(containerClientWidth * underlineMult) //50%
    setTtContentWidth(containerClientWidth * contentMult - 25) //50% - 25px(padding)
  }, [infoRef, isMobile])

  useEventListener(setupInfoToolTip, { type: 'resize' })

  return (
    <S.InfoTooltip $maxWidth={ttUnderlineMaxWidth}>
      <S.InfoTooltipUnderline $isOpened={isOpened} />
      <S.InfoTooltipContent $isOpened={isOpened} $tooltipWidth={ttContentWidth}>
        {children}
      </S.InfoTooltipContent>
    </S.InfoTooltip>
  )
}

function ImageComponent({ imageUrl }: { imageUrl: string }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const closeImageModal = () => setIsImageModalOpen(false)
  const openImageModal = () => setIsImageModalOpen(true)

  return (
    <>
      <S.ImageButton className='image-link' onClick={openImageModal}>
        <Image
          src={`/assets/${imageUrl}`}
          width={90}
          height={60}
          alt={imageUrl}
        />
      </S.ImageButton>
      <Modal isOpen={isImageModalOpen} onClose={closeImageModal}>
        <S.ModalContent>
          <Image
            src={`/assets/${imageUrl}`}
            width={0}
            height={0}
            alt={imageUrl}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }} // optional
          />
        </S.ModalContent>
      </Modal>
    </>
  )
}

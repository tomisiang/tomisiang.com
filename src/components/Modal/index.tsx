'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'
import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

/**
 * Custom React Modal
 */
export default function Modal(props: ModalProps) {
  const { children, isOpen, onClose } = props

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Adds delay to unmounting (closing)
  const [shouldMount, setShouldMount] = useState(false)
  // Adds delay to opening
  const [isOpenDelay, setIsOpenDelay] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setShouldMount(true)
      setTimeout(() => {
        setIsOpenDelay(true)
      }, 10)
    } else {
      setTimeout(() => {
        setShouldMount(false)
      }, S.ANIMATION_DELAY)
      setIsOpenDelay(false)
    }
  }, [isOpen, setShouldMount])

  return mounted && shouldMount
    ? createPortal(
        <>
          <S.Overlay $isOpen={isOpenDelay} onClick={onClose} />
          <S.Modal $isOpen={isOpenDelay}>
            <S.CloseButton onClick={onClose}>
              <RiCloseFill />
            </S.CloseButton>
            {children}
          </S.Modal>
        </>,
        document.body
      )
    : null
}

'use client'

import * as S from './styles'
import { useCallback, useState, useRef, useEffect } from 'react'
import Nav from '../Nav'
import Image from 'next/image'
import { NAME, POSITION } from '@/constants/strings'
import { MY_LINKS } from '@/constants/links'
import { useEventListener, useOnClickOutside } from '@/global-hooks'
import { useUIStore } from '@/global-stores'
import { HiUserAdd } from 'react-icons/hi'
import { IMAGE_DIMENSIONS } from '@/constants/config'

const { DESKTOP, MOBILE } = IMAGE_DIMENSIONS

export default function Header() {
  const { isScroll, setIsScroll, isMobile } = useUIStore()
  const [imageDimensions, setImageDimensions] = useState(DESKTOP.NOT_SCROLL)

  useEffect(() => {
    if (isMobile) {
      return setImageDimensions(isScroll ? MOBILE.SCROLL : MOBILE.NOT_SCROLL)
    }

    setImageDimensions(isScroll ? DESKTOP.SCROLL : DESKTOP.NOT_SCROLL)
  }, [isMobile, isScroll])

  const main =
    typeof window !== 'undefined' ? document.getElementById('main') : null

  useEventListener(
    useCallback(() => {
      if (!main) return

      if (main.scrollTop > 0 && !isScroll) {
        setIsScroll(true)
      } else if (main.scrollTop === 0 && isScroll) {
        setIsScroll(false)
      }
    }, [isScroll, main, setIsScroll]),
    { type: 'scroll', target: main }
  )

  return (
    <S.Header $isScroll={isScroll} $isMobile={isMobile}>
      <S.MeContainer>
        <MyImage {...imageDimensions} />
        <S.NameContainer>
          <h1>{NAME}</h1>
          <p>{POSITION}</p>
        </S.NameContainer>
        <Links />
      </S.MeContainer>
      <Nav />
    </S.Header>
  )
}

interface MyImageProps {
  width: number
  height: number
}

function MyImage(props: MyImageProps) {
  return (
    <S.MyImage>
      <Image {...props} src='/assets/me.jpg' alt='Picture of the author' />
    </S.MyImage>
  )
}

function Links() {
  const [isOpen, setIsOpen] = useState(true)
  const close = () => setIsOpen(false)

  const toggleRef = useRef(null)
  useOnClickOutside(toggleRef, () => setIsOpen(true))

  return (
    <S.Links ref={toggleRef}>
      <S.AddFriendButton onClick={close} $isOpen={isOpen}>
        <S.AddFriendInner>
          <S.AddFriendText>
            <HiUserAdd />
            Add Friend
          </S.AddFriendText>
        </S.AddFriendInner>
      </S.AddFriendButton>
      {/* {isOpen && (
      )} */}
      {MY_LINKS.map((link, index) => (
        <a href={link.url} key={index} target='_blank'>
          <link.icon />
        </a>
      ))}
    </S.Links>
  )
}

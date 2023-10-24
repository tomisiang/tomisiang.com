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
import Modal from '../Modal'

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
  const isMobile = useUIStore(state => state.isMobile)

  if (isMobile) return <LinksMobile />

  return <LinksDesktop />
}

function LinksDesktop() {
  const [isRevealed, setIsRevealed] = useState(false)
  const reveal = () => setIsRevealed(true)
  const hide = () => setIsRevealed(false)

  const toggleRef = useRef(null)
  useOnClickOutside(toggleRef, hide)

  return (
    <S.Links ref={toggleRef}>
      <S.AddFriendButton onClick={reveal} $isRevelealed={isRevealed}>
        <S.AddFriendInner>
          <S.AddFriendText>
            <HiUserAdd />
            Add Friend
          </S.AddFriendText>
        </S.AddFriendInner>
      </S.AddFriendButton>
      {MY_LINKS.map((link, index) => (
        <a href={link.url} key={index} target='_blank'>
          <link.icon />
        </a>
      ))}
    </S.Links>
  )
}

function LinksMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <S.Links>
        <S.AddFriendButtonMobile onClick={openModal}>
          <S.AddFriendText>
            <HiUserAdd />
            Add Friend
          </S.AddFriendText>
        </S.AddFriendButtonMobile>
      </S.Links>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <S.ModalContent>
          <S.ContactsTitle>Contacts</S.ContactsTitle>
          <S.LinksContainer>
            {MY_LINKS.map((link, index) => (
              <S.LinksItem href={link.url} key={index} target='_blank'>
                <link.icon />
                <span>{link.path}</span>
              </S.LinksItem>
            ))}
          </S.LinksContainer>
        </S.ModalContent>
      </Modal>
    </>
  )
}

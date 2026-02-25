'use client'

import * as S from './styles'
import { useState, useRef, useEffect } from 'react'
import Nav from '../Nav'
import Image from 'next/image'
import { NAME, POSITION } from '@/constants/strings'
import { MY_LINKS } from '@/constants/links'
import { useOnClickOutside } from '@/global-hooks'
import { useUIStore } from '@/global-stores'
import { HiUserAdd } from 'react-icons/hi'
import { IMAGE_DIMENSIONS } from '@/constants/config'
import Modal from '../Modal'
import { cn } from '@/lib/utils'

const { DESKTOP, MOBILE } = IMAGE_DIMENSIONS

export default function Header() {
  const { isScroll, isMobile } = useUIStore(({ isScroll, isMobile }) => ({
    isScroll,
    isMobile,
  }))

  const [imageDimensions, setImageDimensions] = useState(DESKTOP.NOT_SCROLL)

  useEffect(() => {
    if (isMobile) {
      return setImageDimensions(isScroll ? MOBILE.SCROLL : MOBILE.NOT_SCROLL)
    }

    setImageDimensions(isScroll ? DESKTOP.SCROLL : DESKTOP.NOT_SCROLL)
  }, [isMobile, isScroll])

  return (
    <header
      className={cn(
        'relative w-full z-10 flex flex-col justify-between mt-5 md:mt-0 transition-[min-height,background-color] duration-[200ms,400ms] ease-out',
        {
          'min-h-[80px] md:min-h-[110px]': isScroll,
          'min-h-[115px] md:min-h-[145px]': !isScroll,
        }
      )}
    >
      <div className='flex items-end gap-3'>
        <Image
          {...imageDimensions}
          src='/assets/me.jpg'
          alt='Picture of the author'
          className='transition-[width,height] duration-200 ease-out rounded-[10px]'
        />
        <div className='flex flex-col flex-1'>
          <h1 className='text-base md:text-3xl font-bold'>{NAME}</h1>
          <p className='text-[12px] md:text-base'>{POSITION}</p>
        </div>
        <div className='flex flex-col items-end md:gap-2'>
          {/* <DarkModeToggle /> */}
          {/* <Links /> */}
        </div>
      </div>
      <Nav />
    </header>
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

'use client'

import { NAV_HEIGHT, OUTER_MARGIN } from '@/constants/config'
import { cssHStack, cssTruncate, cssVStack } from '@/styles/cssUtils'
import { css, keyframes, styled } from 'styled-components'

const { DESKTOP, MOBILE } = NAV_HEIGHT

interface HeaderProps {
  $isScroll: boolean
  $isMobile: boolean
}

export const Header = styled.header<HeaderProps>`
  height: ${({ $isScroll, $isMobile }) => {
    if ($isMobile) {
      return css`
        ${$isScroll ? MOBILE.SCROLL : MOBILE.NOT_SCROLL}px
      `
    }

    return css`
      ${$isScroll ? DESKTOP.SCROLL : DESKTOP.NOT_SCROLL}px
    `
  }};

  width: 100%;
  z-index: 10;
  transition: height 0.2s ease-out;
  background: ${({ theme }) => theme.white2};

  ${cssVStack};
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-top: ${OUTER_MARGIN}px;
  }
`

export const MeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`

export const NameContainer = styled.div`
  ${cssTruncate}; /* add truncate to parents as well */
  flex: 1; /* width: 100% also would work */

  > h1,
  > p {
    ${cssTruncate};
  }

  > h1 {
    font-size: 32px;

    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  > p {
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`

export const MyImage = styled.div`
  > img {
    transition: width 0.2s ease-out, height 0.2s ease-out;
    border-radius: 10px;
  }
`

export const Links = styled.div`
  position: relative;
  ${cssHStack};
  gap: 5px;

  svg {
    fill: ${({ theme }) => theme.red1};
    width: 25px;
    height: 25px;

    @media only screen and (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`

const fadeInUp = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  49% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  51% {
    transform: scaleY(1);
    transform-origin: top;
  }
  100% {
    transform: scaleY(0);
    transform-origin: top;
  }
`

export const AddFriendButton = styled.button<{ $isRevelealed: boolean }>`
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.gray2};
  border: 1px solid ${({ theme }) => theme.gray1};

  color: ${({ theme }) => theme.red1};
  font-weight: 700;
  font-size: 14px;
  border-radius: 10px;

  opacity: 1;
  transition: opacity 0.4s ease, border 0.4s ease, background-color 0.4s ease;

  ${({ $isRevelealed }) =>
    $isRevelealed &&
    css`
      opacity: 0;
      border: 0;
      pointer-events: none;
      background-color: transparent;

      transition: opacity 0.4s ease 0.8s, border 0.4s ease 0.4s,
        background-color 0.4s ease 0.4s;

      ${AddFriendInner} {
        &:before {
          animation: ${fadeInUp} 0.8s ease;
        }
        ${AddFriendText} {
          opacity: 0;
          transition: opacity 0.3s ease 0.2s;
        }
      }
    `}

  svg {
    fill: ${({ theme }) => theme.red1};
    width: 20px;
    height: 20px;
  }
`

export const AddFriendButtonMobile = styled.button`
  overflow: hidden;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.gray2};
  border: 1px solid ${({ theme }) => theme.gray1};

  color: ${({ theme }) => theme.red1};
  font-weight: 700;
  font-size: 12px;
  border-radius: 5px;

  svg {
    fill: ${({ theme }) => theme.red1};
    width: 15px;
    height: 15px;
  }
`

/**
 * For animation
 */
export const AddFriendInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    inset: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.red1};
    transform: scaleY(0);
  }
`
export const AddFriendText = styled.div`
  height: 100%;
  ${cssHStack};
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const ModalContent = styled.div`
  ${cssVStack};
  gap: 20px;
`

export const ContactsTitle = styled.h3`
  font-size: 22px;
  margin: 0 auto;
`

export const LinksContainer = styled.div`
  ${cssVStack};
`

export const LinksItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 0;

  border-bottom: 2px dashed ${({ theme }) => theme.gray1};
  &:first-child {
    border-top: 2px dashed ${({ theme }) => theme.gray1};
  }

  svg {
    fill: ${({ theme }) => theme.red1};
    width: 25px;
    height: 25px;
  }
`

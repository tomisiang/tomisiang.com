'use client'

import { cssHStack, cssVStack } from '@/styles/cssUtils'
import { css, keyframes, styled } from 'styled-components'

export const Links = styled.div`
  position: relative;
  ${cssHStack};
  gap: 5px;

  svg {
    fill: ${({ theme }) => theme.accent};
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

const fadeInDown = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  49% {

    transform: scaleY(1);
    transform-origin: top;

  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
`

export const AddFriendButton = styled.button<{ $isRevelealed: boolean }>`
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) =>
    theme.themeId === 'DARK' ? theme.gray4 : theme.gray2};
  border: ${({ theme }) =>
    theme.themeId === 'DARK' ? 'none' : `1px solid ${theme.gray1}`};

  color: ${({ theme }) => theme.accent};
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
    fill: ${({ theme }) => theme.accent};
    width: 20px;
    height: 20px;
  }
`

export const AddFriendButtonMobile = styled.button`
  overflow: hidden;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({ theme }) =>
    theme.themeId === 'DARK' ? theme.gray4 : theme.gray2};
  border: ${({ theme }) =>
    theme.themeId === 'DARK' ? 'none' : `1px solid ${theme.gray1}`};

  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 12px;
  border-radius: 5px;

  svg {
    fill: ${({ theme }) => theme.accent};
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
    background: ${({ theme }) => theme.accent};
    transform: scaleY(0);
    animation: ${fadeInDown} 0.8s ease;
  }
`
export const AddFriendText = styled.div`
  height: 100%;
  ${cssHStack};
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: opacity 0.3s ease 0.4s;
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
    fill: ${({ theme }) => theme.accent};
    width: 25px;
    height: 25px;
  }
`

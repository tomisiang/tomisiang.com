'use client'

import { OUTER_MARGIN } from '@/constants/config'
import { Container } from '@/styles/cssComponents'
import styled, { css } from 'styled-components'

export const ANIMATION_DELAY = 400

interface Props {
  $isOpen: boolean
}

export const Overlay = styled.div<Props>`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(8, 8, 16, 0.2); */
  z-index: 1000;
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: opacity ${ANIMATION_DELAY}ms ease-in ${ANIMATION_DELAY}ms;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      transition: opacity ${ANIMATION_DELAY}ms ease-in;
    `}
`

export const Modal = styled(Container)<Props>`
  position: fixed;
  top: 50%;
  left: 50%;
  height: calc(100% - ${OUTER_MARGIN * 2}px);
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.gray1};
  padding: 30px 40px 30px;
  border-radius: 20px;
  z-index: 1000;
  transform: translate(-50%, 100%);
  transition: transform ${ANIMATION_DELAY}ms ease-in;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transition: transform ${ANIMATION_DELAY}ms ease-in ${ANIMATION_DELAY}ms;
      transform: translate(-50%, -50%);
    `};

  @media only screen and (max-width: 768px) {
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const CloseButton = styled.button`
  border-radius: 50%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    fill: ${({ theme }) => theme.red1};
    width: 45px;
    height: 45px;
  }
`

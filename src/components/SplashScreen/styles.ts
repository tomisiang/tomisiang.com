import { SPLASH_SCREEN_DELAY } from '@/constants/config'
import {
  cssFlexCenterChildren,
  cssTruncate,
  cssVStack,
} from '@/styles/cssUtils'
import { styled, keyframes } from 'styled-components'

const progressBarAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

export const SplashScreen = styled.div`
  ${cssVStack};
  ${cssFlexCenterChildren};
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${({ theme }) => theme.white2};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`
export const NameContainer = styled.div`
  ${cssTruncate};

  > h1,
  > p {
    ${cssTruncate};
  }
`

export const ProgressBar = styled.div`
  height: 6px;
  background-color: ${({ theme }) => theme.blue1};
  position: absolute;
  top: 0;
  left: 0;
  animation: ${progressBarAnimation} ${SPLASH_SCREEN_DELAY}ms
    cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  border-radius: 0 15px 15px 0;
`

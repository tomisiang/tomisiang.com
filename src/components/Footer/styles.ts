'use client'

import { MAX_WIDTH } from '@/constants/config'
import { cssHStack } from '@/styles/cssUtils'
import { css, styled } from 'styled-components'

const footerFontStyle = css`
  font-size: 14px;
  color: ${({ theme }) => theme.blue1};
`

export const FooterMobile = styled.footer`
  ${cssHStack};
  ${footerFontStyle};
  justify-content: center;
  padding-top: 20px;

  @media only screen and (min-width: 1223px) {
    display: none;
  }
`

export const FooterDesktop = styled.footer`
  ${cssHStack};
  ${footerFontStyle};
  position: absolute;
  left: 0;
  bottom: 20px;
  width: calc((100vw - ${MAX_WIDTH}px) / 2);
  justify-content: flex-end;
  padding-right: 20px;

  p {
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.gray1};
    border-radius: 10px;
    padding: 5px 10px;
  }

  @media only screen and (max-width: 1824px) {
    justify-content: center;
    padding-right: unset;
  }

  @media only screen and (max-width: 1224px) {
    display: none;
  }
`

interface BottomFiller {
  $bottomPadding: number
}
export const BottomFiller = styled.div<BottomFiller>`
  padding-bottom: ${({ $bottomPadding }) => $bottomPadding}px;
`

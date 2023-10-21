'use client'

import styled from 'styled-components'
import { cssVStack } from './cssUtils'
import { MAX_WIDTH, OUTER_BORDER_WIDTH, OUTER_MARGIN } from '@/constants/config'

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: ${MAX_WIDTH}px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const OuterBorder = styled(Container)`
  ${cssVStack};
  align-items: center;
  margin-top: ${OUTER_MARGIN}px;
  margin-bottom: ${OUTER_MARGIN}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.bg};

  height: calc(100svh - ${OUTER_MARGIN * 2}px);
  height: calc(100vh - ${OUTER_MARGIN * 2}px);
  border: 1px solid ${({ theme }) => theme.gray1};
  padding: ${OUTER_BORDER_WIDTH}px ${OUTER_BORDER_WIDTH}px 0;

  // Remove border, bottom margin, paddings
  @media only screen and (max-width: 768px) {
    margin-top: unset;
    margin-bottom: unset;
    height: 100vh;
    height: 100svh;
    border: unset;
    padding: 0 20px 0;
  }
`

export const Main = styled.main`
  flex: 1;
  ${cssVStack};
  margin-bottom: ${OUTER_MARGIN}px;
  overflow: auto;
  transition: height 0.2s ease-out, margin-top 0.2s ease-out;

  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

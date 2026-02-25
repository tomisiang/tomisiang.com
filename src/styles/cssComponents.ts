'use client'

import styled from 'styled-components'
import { MAX_WIDTH } from '@/constants/config'

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: ${MAX_WIDTH}px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const Emph = styled.span`
  font-weight: 700;
  /* font-style: italic; */
`

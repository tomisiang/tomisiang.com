'use client'

import { styled } from 'styled-components'

export const Section = styled.section`
  margin-top: 20px;
  padding-bottom: 20px;
  margin-right: 20px;
  border-bottom: ${({ theme }) =>
    theme.themeId === 'DARK'
      ? `2px dashed ${theme.gray5}`
      : `2px dashed ${theme.gray1}`};

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`

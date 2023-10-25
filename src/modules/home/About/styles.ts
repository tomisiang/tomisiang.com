'use client'

import { TECHNOLOGIES_COLUMN_SIZE } from '@/constants/config'
import { cssTruncate, cssVStack } from '@/styles/cssUtils'
import styled, { css } from 'styled-components'

export const AboutSectionContainer = styled.div`
  ${cssVStack};
`

export const AboutParagraph = styled.p`
  text-indent: 2rem;
  line-height: 155%;

  border: 1px solid ${({ theme }) => theme.gray1};
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 10px;
  padding: 10px;

  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const AboutTechnologies = styled.div`
  ${cssVStack};
  margin-top: 20px;
`
export const AboutTechnologiesHeading = styled.h3`
  font-weight: 400;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const TechnologiesUl = styled.ul`
  max-width: 510px;
  display: grid;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;
  grid-template-columns: repeat(${TECHNOLOGIES_COLUMN_SIZE}, 1fr);

  @media only screen and (max-width: 768px) {
    max-width: unset;
    margin-right: 10px;
    grid-template-columns: repeat(${TECHNOLOGIES_COLUMN_SIZE - 1}, 1fr);
  }

  > li {
    min-width: 0;
  }
`

export const TechnologiesBox = styled.div<{
  $column: number
}>`
  padding: 10px 5px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.gray1};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.blue3};

    ${({ $column }) => {
      let opacity = 1
      switch ($column) {
        case 0:
          opacity = 0.19
          break
        case 1:
          opacity = 0.07
          break
        case 2:
          opacity = 0.04
          break
        default:
          opacity = 0
      }

      return css`
        opacity: ${opacity};
      `
    }}
  }

  &:hover {
    > div {
      white-space: unset;
    }
  }

  > div {
    ${cssTruncate};
    font-weight: 700;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`

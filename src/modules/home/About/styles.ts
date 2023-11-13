'use client'

import { TECHNOLOGIES_COLUMN_SIZE } from '@/constants/config'
import { cssHStack, cssTruncate, cssVStack } from '@/styles/cssUtils'
import styled, { css } from 'styled-components'

export const AboutSectionContainer = styled.div`
  ${cssVStack};
`

export const AboutParagraphContainer = styled.div`
  border: ${({ theme }) =>
    `1px solid ${theme.themeId === 'DARK' ? theme.gray5 : theme.gray1}`};
  background-color: ${({ theme }) =>
    theme.themeId === 'DARK' ? theme.gray4 : theme.gray2};
  transition: background-color 0.4s ease;
  border-radius: 10px;
  overflow: hidden;

  ${cssVStack};
`

export const AboutParagraphTop = styled.div`
  ${cssVStack};
  gap: 20px;
  padding: 10px;

  > p {
    text-indent: 2rem;
    line-height: 155%;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`

export const DownloadResume = styled.a`
  border: 0;
  padding: 8px 0;
  background-color: ${({ theme }) =>
    theme.themeId === 'DARK' ? theme.gray3 : theme.blue7};
  transition: background-color 0.4s ease;
  cursor: pointer;

  ${cssHStack};
  align-items: center;
  justify-content: center;
  gap: 5px;

  > svg {
    fill: ${({ theme }) => theme.color};
    width: 15px;
    height: 15px;

    @media only screen and (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }

  > span {
    font-size: 14px;

    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
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
    background-color: ${({ theme }) =>
      theme.themeId === 'DARK' ? theme.white : theme.blue3};

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

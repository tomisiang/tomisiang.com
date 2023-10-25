'use client'

import { cssHStack, cssVStack } from '@/styles/cssUtils'
import styled, { css, keyframes } from 'styled-components'

const CONNECTOR_TOP_OFFSET = 4
const CONNECTOR_GAP = 10 // Change this for the gap

interface InformationProps {
  $hasLeftLine?: boolean
}

export const Information = styled.div<InformationProps>`
  ${({ $hasLeftLine }) =>
    $hasLeftLine &&
    css`
      padding-bottom: 20px;
    `};

  padding-left: 25px;
  position: relative;
  ${cssHStack}
  justify-content: space-between;
`

export const SubInfo = styled.p`
  color: ${({ theme }) => theme.grey1};
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
`

export const Info = styled.h3<{ $hasTooltip: boolean }>`
  position: relative;
  ${({ theme, $hasTooltip }) =>
    $hasTooltip &&
    css`
      cursor: pointer;
      border-bottom: 2px dashed ${theme.blue4};
    `};

  font-size: 19px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const InfoTooltip = styled.div<{ $maxWidth: number }>`
  ${cssHStack};
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  max-width: ${({ $maxWidth }) => $maxWidth}px;
`

export const InfoTooltipUnderline = styled.div<{ $isOpened: boolean }>`
  position: relative;
  width: 100%;
  height: 3px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.blue1};
    width: 100%;

    transition: transform 0.3s ease-out 0.3s;
    transform-origin: left bottom;
    transform: scaleX(0);
  }

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      &:before {
        transition: transform 0.3s ease-out 0s;
        transform-origin: left bottom;
        transform: scaleX(1);
      }
    `}
`

interface InfoTooltipContentProps {
  $isOpened: boolean
  $tooltipWidth: number
}

export const InfoTooltipContent = styled.div<InfoTooltipContentProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.blue1};
  width: ${({ $tooltipWidth }) => $tooltipWidth}px;
  top: 0;
  left: 100%;
  border-radius: 0 10px 10px 10px;
  color: ${({ theme }) => theme.white};
  z-index: 1000;
  padding: 15px 10px;

  transition: transform 0.3s ease-out 0s;
  transform-origin: left top;
  transform: rotateX(90deg);

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      transition: transform 0.3s ease-out 0.3s;
      transform: rotateX(0deg);
    `};

  /* Content */

  font-size: 14px;

  ul {
    ${cssVStack};
    row-gap: 15px;
  }

  li {
    list-style-type: circle !important;
    margin-left: 15px;
  }
`

export const Date = styled.p`
  color: ${({ theme }) => theme.red1};

  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const LeftGraphics = styled.div`
  ${cssVStack};
  position: absolute;
  left: 0;
  height: 100%;
  align-items: center;
  padding: ${CONNECTOR_TOP_OFFSET}px 0 ${CONNECTOR_GAP - CONNECTOR_TOP_OFFSET}px;
  gap: ${CONNECTOR_GAP}px;
`

export const Bullet = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.blue1};
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`
export const InformationConnector = styled.div`
  width: 2px;
  flex: 1;
  background-color: ${({ theme }) => theme.blue1};
  border-radius: 10px;
`

export const ImageButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    border-radius: 10px;
    opacity: 0.4;

    @media only screen and (max-width: 768px) {
      border-radius: 5px;
    }

    &:hover {
      opacity: 1;
    }
  }
`
export const ModalContent = styled.div`
  img {
    border-radius: 20px;
  }
`

'use client'

import { styled } from 'styled-components'

export const Nav = styled.nav`
  position: relative;
`

export const NavUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  border-bottom: ${({ theme }) =>
    theme.themeId === 'DARK'
      ? `2px solid ${theme.gray5}`
      : `2px solid ${theme.gray1}`};
`

export const NavLi = styled.li`
  display: flex;
`

export const NavButton = styled.button`
  border: 0;
  background: transparent;

  color: ${({ theme }) => theme.color} !important;
  cursor: pointer;
  padding: 8px 0px;

  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Indicator = styled.div`
  position: absolute;
  height: 3px;
  background-color: ${({ theme }) => theme.color};
  transition: all 0.3s ease;
  bottom: 0px;
  border-radius: 20px;
`

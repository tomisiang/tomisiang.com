'use client'

import { PropsWithChildren, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import {
  ServerStyleSheet,
  StyleSheetManager,
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components'
import { useThemeStore } from '@/global-stores'

const colors = {
  white: '#fff',
  white2: '#ECECEC',
  blue1: '#32424F',
  blue2: '#AEB0AA',
  blue3: '#0C224E',
  blue4: '#AFB6BB',
  blue5: '#DBDDE0',
  blue6: '#59748a',
  blue7: '#C2C6CE',
  gray1: '#D5D5D5',
  gray2: '#E3E4E6',
  gray3: '#424549',
  gray4: '#36393E',
  gray5: '#80848E',
  red1: '#A44F66',
  red2: '#CC9CA9',
}

export const theme = {
  LIGHT: {
    themeId: 'LIGHT',
    ...colors,
    bg: `linear-gradient(to bottom, ${colors.white2}, ${colors.blue5})`,
    cardBg: colors.white2,
    color: colors.blue1,
    accent: colors.red1,
  },
  DARK: {
    themeId: 'DARK',
    ...colors,
    bg: colors.gray4,
    cardBg: colors.gray3,
    color: colors.white,
    accent: colors.red2,
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    ${({ theme }) => css`
      color: ${theme.color};
      background: ${theme.bg};
      transition: background 0.4s ease;

      @media only screen and (max-width: 768px) {
        background: ${theme.bg};
      }
    `}
  }  

  a {
    text-decoration: none;
    color: unset;
  }

  ::selection {
    background-color: ${({ theme }) => theme.blue1};
    color: ${({ theme }) => theme.white};
  }
  ::-webkit-scrollbar {
    width: 8px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.themeId === 'DARK' ? theme.bg : theme.gray2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.blue4};
    border-radius: 3px;
  }
`

/**
 * Styled Component Registry that includes theme and global css
 */
function StyledComponentsRegistry({ children }: PropsWithChildren) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default function StyledComponents({ children }: PropsWithChildren) {
  const themeId = useThemeStore(state => state.id)

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme[themeId]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

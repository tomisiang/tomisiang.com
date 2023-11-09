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
  red1: '#A44F66',
}

export const theme = {
  ...colors,
  bg: colors.white2,
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
      color: ${theme.blue1};
      background: linear-gradient(to bottom, ${theme.bg}, ${theme.blue5});

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
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.gray2};
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
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  )
}

export default function StyledComponents({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  )
}

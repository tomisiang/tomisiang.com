'use client'

import { useState, useEffect } from 'react'
import { PropsWithChildren } from 'react'
import * as S from './styles'
import { NAME, POSITION } from '@/constants/strings'
import { SPLASH_SCREEN_DELAY } from '@/constants/config'

export default function AddSplashScreen({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, SPLASH_SCREEN_DELAY)
  }, [])

  return (
    <>
      {isLoading && (
        <S.SplashScreen>
          <S.ProgressBar />
          <S.NameContainer>
            <h1>{NAME}</h1>
            <p>{POSITION}</p>
          </S.NameContainer>
        </S.SplashScreen>
      )}
      {children}
    </>
  )

  // return (
  //   <Suspense
  //     fallback={
  //       <S.SplashScreen>
  //         <S.ProgressBar />
  //         <S.NameContainer>
  //           <h1>{NAME}</h1>
  //           <p>{POSITION}</p>
  //         </S.NameContainer>
  //       </S.SplashScreen>
  //     }
  //   >
  //     {children}
  //   </Suspense>
  // )
}

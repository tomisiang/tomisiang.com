'use client'

import { Section } from '@/components'
import * as S from './styles'
import {
  ABOUT_PARAGRAPH,
  ABOUT_TECHNOLOGIES_HEADER,
  TECHNOLOGIES,
} from '@/constants/strings'
import { TECHNOLOGIES_COLUMN_SIZE } from '@/constants/config'
import { useMemo } from 'react'
import { useUIStore } from '@/global-stores'
import { AiOutlineDownload } from 'react-icons/ai'
import type { TechnologyWithColumn } from '@/types'

function getTechnologiesWithColumn(isMobile: boolean): TechnologyWithColumn[] {
  const technologiesWithColumn: TechnologyWithColumn[] = []
  const technologiesColumnSize = isMobile
    ? TECHNOLOGIES_COLUMN_SIZE - 1
    : TECHNOLOGIES_COLUMN_SIZE

  let column = 0

  for (const technology of TECHNOLOGIES) {
    technologiesWithColumn.push({ ...technology, column })

    // New Row
    if (column + 1 === technologiesColumnSize) {
      column = 0
    } else {
      column++
    }
  }

  return technologiesWithColumn
}

export default function AboutSection() {
  const { isMobile } = useUIStore()

  const technologies = useMemo(
    () => getTechnologiesWithColumn(isMobile),
    [isMobile]
  )

  return (
    <Section>
      <S.AboutSectionContainer>
        <S.AboutParagraphContainer>
          <S.AboutParagraphTop>{ABOUT_PARAGRAPH}</S.AboutParagraphTop>
          <S.DownloadResume href={'/docs/tom_isiang_resume.pdf'} download>
            <AiOutlineDownload />
            <span>Resume</span>
          </S.DownloadResume>
        </S.AboutParagraphContainer>
        <S.AboutTechnologies>
          <S.AboutTechnologiesHeading>
            {ABOUT_TECHNOLOGIES_HEADER}
          </S.AboutTechnologiesHeading>
          <S.TechnologiesUl>
            {technologies.map((technology, index) => (
              <TechnlogyBox key={index} {...technology} />
            ))}
          </S.TechnologiesUl>
        </S.AboutTechnologies>
      </S.AboutSectionContainer>
    </Section>
  )
}

function TechnlogyBox(props: TechnologyWithColumn) {
  const { column, text } = props

  return (
    <li>
      <S.TechnologiesBox $column={column}>
        <div>{text}</div>
      </S.TechnologiesBox>
    </li>
  )
}

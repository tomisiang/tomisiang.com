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
      <div className='flex flex-col'>
        <div className='flex flex-col overflow-hidden border-1 border-[1px] border-[#D5D5D5] bg-[#E3E4E6] transition-[background-color] duration-[400ms] ease-out rounded-[10px]'>
          <div className='flex flex-col gap-5 p-3 [&>p]:indent-[2rem] leading-[1.55] text-xs md:text-base'>
            {ABOUT_PARAGRAPH}
          </div>
          <a
            href={'/docs/tom_isiang_resume.pdf'}
            className='border-0 py-2 bg-[#C2C6CE] transition-[background-color] duration-[400ms] ease-out cursor-pointer flex items-center justify-center gap-[5px]'
            download
          >
            <AiOutlineDownload className='fill-[#32424F] w-[10px] h-[10px] md:w-[15px] md:h-[15px]' />
            <span className='text-[10px] md:text-sm'>Resume</span>
          </a>
        </div>
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
      </div>
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

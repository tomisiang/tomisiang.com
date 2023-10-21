import { Information, Section } from '@/components'
import * as S from './styles'
import { NAV_ITEMS, EXPERIENCES } from '@/constants/strings'

export default function ExperienceSection() {
  return (
    <Section title={NAV_ITEMS[1].text}>
      <S.ExperienceSectionContainer>
        {EXPERIENCES.map((exp, index) => (
          <Information
            key={index}
            subInfo={exp.company}
            info={exp.position}
            date={exp.duration}
            leftLine={{ length: EXPERIENCES.length, index }}
            infoTooltip={exp.positionInfo}
          />
        ))}
      </S.ExperienceSectionContainer>
    </Section>
  )
}

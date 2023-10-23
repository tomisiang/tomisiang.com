import { Information, Section } from '@/components'
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  CERTIFICATIONS_HEADER,
  NAV_ITEMS,
} from '@/constants/strings'
import * as S from './styles'

export default function AchievementsSection() {
  return (
    <Section title={NAV_ITEMS[3].text}>
      <S.AchievementsSection>
        {ACHIEVEMENTS.map(({ moreInfo, ...ach }, index) => (
          <Information
            key={index}
            {...ach}
            leftLine={{ length: ACHIEVEMENTS.length, index }}
            infoTooltip={moreInfo}
          />
        ))}
        <S.CertificationsHeading>
          {CERTIFICATIONS_HEADER}
        </S.CertificationsHeading>
        {CERTIFICATIONS.map((ach, index) => (
          <Information
            key={index}
            {...ach}
            leftLine={{ length: CERTIFICATIONS.length, index }}
          />
        ))}
      </S.AchievementsSection>
    </Section>
  )
}

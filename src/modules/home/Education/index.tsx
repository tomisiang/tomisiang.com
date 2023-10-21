import { Information, Section } from '@/components'
import { EDUCATION, NAV_ITEMS } from '@/constants/strings'

export default function EducationSection() {
  return (
    <Section title={NAV_ITEMS[2].text}>
      {EDUCATION.map((ed, index) => (
        <Information
          key={index}
          subInfo={ed.school}
          info={ed.course}
          date={ed.duration}
          leftLine={{ length: EDUCATION.length, index }}
        />
      ))}
    </Section>
  )
}

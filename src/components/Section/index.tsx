import { PropsWithChildren } from 'react'
import * as S from './styles'

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  title?: string
}

export default function Section(props: SectionProps) {
  const { title, children, ...rest } = props

  return (
    <S.Section className='section' {...rest}>
      {!!title && <S.SectionHeader>{title}</S.SectionHeader>}
      <S.SectionContent>{children}</S.SectionContent>
    </S.Section>
  )
}

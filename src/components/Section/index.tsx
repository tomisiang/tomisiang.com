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
    <S.Section
      className='section mt-5 pb-5 mr-0 md:mr-5 border-[#D5D5D5]'
      {...rest}
    >
      {!!title && <h2 className='text-lg md:text-2xl mb-5'>{title}</h2>}
      <div>{children}</div>
    </S.Section>
  )
}

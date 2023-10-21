import { SECTIONS } from '@/constants/sections'
import { Footer, Header, Main } from '@/components'
import { OuterBorder } from '@/styles/cssComponents'

export default function Home() {
  return (
    <OuterBorder>
      <Header />
      <Main>
        {SECTIONS.map((Section, index) => (
          <Section key={index} />
        ))}
        <Footer />
      </Main>
    </OuterBorder>
  )
}

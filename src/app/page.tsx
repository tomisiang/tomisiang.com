import { SECTIONS } from '@/constants/sections'
import { Footer, Header } from '@/components'

export default function Home() {
  return (
    <div className='md:mx-auto md:max-w-[680px] w-full md:w-[80%] flex flex-col md:my-5 md:rounded-3xl bg-[#ECECEC] h-svh md:h-[calc(100svh-32px)] md:border-[1px] border-solid border-[#D5D5D5] px-5 md:px-10 md:py-10'>
      <Header />
      <main id='main' className='flex flex-col md:mb-5 overflow-auto'>
        {SECTIONS.map((Section, index) => (
          <Section key={index} />
        ))}
        <Footer />
      </main>
    </div>
  )
  // return (
  //   <OuterBorder>
  //     <Header />
  //     <Main>
  //       {SECTIONS.map((Section, index) => (
  //         <Section key={index} />
  //       ))}
  //       <Footer />
  //     </Main>
  //   </OuterBorder>
  // )
}

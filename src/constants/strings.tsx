import { Emph } from '@/styles/cssComponents'

import type {
  Education,
  Experience,
  Technology,
  Achievement,
  Certication,
} from '@/types'

export const NAME = 'Tom Isiang'
export const POSITION = 'Frontend Web Developer'

export const NAV_ITEMS = [
  { text: 'About' },
  { text: 'Experience' },
  { text: 'Education' },
  { text: 'Achievements' },
]

export const ABOUT_PARAGRAPH = (
  <>
    <p>
      Hello, my name is <Emph>Tom</Emph>. I am a highly motivated and
      continuously learning individual with a keen interest in emerging
      technologies. As a <Emph>dedicated problem-solver</Emph>, I take pride in
      my ability to consistently overcome project obstacles while adhering to
      the <Emph>principles of robust</Emph> and <Emph>elegant solutions</Emph>.
    </p>
    <p>
      I consider myself a <Emph>kind</Emph> and{' '}
      <Emph>empathetic individual</Emph> who understands the significance of
      maintaining a positive and supportive attitude in a team.
    </p>
  </>
)

export const ABOUT_TECHNOLOGIES_HEADER = "Technologies I've worked with:"

export const TECHNOLOGIES: Technology[] = [
  { text: 'Reactjs' },
  { text: 'Nextjs' },
  { text: 'React Native' },
  { text: 'TypeScript' },
  { text: 'Native Android' },
  { text: 'Nodejs' },
  { text: 'Express' },
  { text: 'Postgres' },
  { text: 'MongoDB' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Reward Holdings',
    position: 'Frontend Web Developer',
    positionInfo: (
      <ul>
        <li>
          Proficiently utilized <Emph>React.js</Emph> to develop and maintain a
          codebase, translating designs into responsive web interfaces and
          reusable components.
        </li>
        <li>
          Optimized components for top performance across diverse web devices
          and browsers, efficiently turning designs into functional code while
          adhering to process specifications.
        </li>
      </ul>
    ),
    duration: { from: '2022' },
  },
  {
    company: 'Elixir Digital',
    position: 'Native Android Developer',
    positionInfo: (
      <ul>
        <li>
          Built <Emph>Native Android</Emph> apps for corporate use, utilizing
          both <Emph>Java</Emph> and <Emph>Kotlin</Emph> to create versatile and
          high-performance solutions. These apps are optimized for various
          devices and aligned them with the
          {"organization's"} objectives.
        </li>
      </ul>
    ),
    duration: { from: '2019', to: '2022' },
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'University of Mindanao',
    course: 'BS in Information Technology',
    duration: { from: '2015', to: '2019' },
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    subInfo: 'University of Mindanao',
    info: 'Best Capstone 2019',
    date: '2019',
    imageUrl: 'capst.jpg',
    moreInfo: (
      <p>
        The Lead Developer behind{' '}
        <Emph>
          BookHook: an Android-based Student Assistance App that utilizes
          Optical Character Recognition and the SMMRY Algorithm
        </Emph>
        , that received the <Emph>Best Capstone Project</Emph> award on March
        20, 2019 at the University of Mindanao.
      </p>
    ),
  },
]

export const CERTIFICATIONS_HEADER = 'Certifications:'

export const CERTIFICATIONS: Certication[] = [
  {
    subInfo: 'Microsoft Technology Associate',
    info: 'Security Fundamentals',
    date: '2019',
    imageUrl: '4.jpg',
  },
  {
    subInfo: 'Microsoft Technology Associate',
    info: 'Database Adminstration Fundamentals',
    date: '2018',
    imageUrl: '3.jpg',
  },
  {
    subInfo: 'Microsoft Technology Associate',
    info: 'Introduction to Programming using Java',
    date: '2018',
    imageUrl: '2.jpg',
  },
  {
    subInfo: 'Microsoft Technology Associate',
    info: 'Networking Fundamentals',
    date: '2017',
    imageUrl: '1.jpg',
  },
]

export const FOOTER = '© {0} Tom Isiang. All Rights Reserved.'

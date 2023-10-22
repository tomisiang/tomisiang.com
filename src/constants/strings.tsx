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

export const ABOUT_PARAGRAPH =
  'Hello, my name is Tom. I am a highly motivated and continuously learning individual with a keen interest in emerging technologies. As a dedicated problem-solver, I take pride in my ability to consistently overcome project obstacles while adhering to the principles of robust and elegant solutions.'

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
          Proficiently utilized React.js to develop and maintain a codebase,
          translating designs into responsive web interfaces and reusable
          components.
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
        <li>Build very cool native android apps</li>
      </ul>
    ),
    duration: { from: '2019', to: '2022' },
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'University of Mindanao',
    course: 'Bachelor of Science in Information Technology',
    duration: { from: '2015', to: '2019' },
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    subInfo: 'University of Mindanao',
    info: 'Best Capstone 2019',
    date: '2019',
    imageUrl: 'capst.jpg',
  },
]

// Lead Developer of BookHook: An Android-based Student Assistance App utilizing Optical Character Recognition and SMMRY Algorithm University of Mindanao

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

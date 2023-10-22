export interface Technology {
  text: string
}

export interface TechnologyWithColumn extends Technology {
  column: number
}

export interface Duration {
  from: string
  to?: string
}

export interface Experience {
  company: string
  position: string
  positionInfo: React.ReactNode
  duration: Duration
}

export interface Education {
  school: string
  course: string
  duration: Duration
}

export interface Achievement {
  subInfo: string
  info: string
  date: string | Duration
  imageUrl?: string
  moreInfo?: React.ReactNode
}

export interface Certication extends Achievement {}

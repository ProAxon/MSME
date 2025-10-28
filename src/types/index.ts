// Global types for the Ashley Creative Agency Next.js app

export interface TeamMember {
  name: string
  position: string
  image: string
  href: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  icon: string
  href: string
}

export interface Service {
  title: string
  description: string
  features: string[]
  href: string
}

export interface BlogPost {
  title: string
  category: string
  date: string
  image: string
  excerpt: string
  href: string
}

export interface PortfolioItem {
  title: string
  category: string
  image: string
  href: string
}

export interface Review {
  name: string
  company: string
  text: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export interface GSAPAnimation {
  element: string
  animation: string
  config: AnimationConfig
}

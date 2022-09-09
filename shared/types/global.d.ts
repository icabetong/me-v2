declare global {
  type PageProps = {
    locale: string
  }
  type NavigationProps = {
    isAnimated?: boolean
  }
  type Route = 'home' | 'about' | 'skills' | 'works' | 'contact'
  type ContactForm = {
    name: string
    email: string
    subject: string
    body: string
  }
}

export {}

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
  type RepositoryData = {
    name: string,
    homepage: string?,
    fullName: string,
    private: boolean,
    description: string,
    watchers: number,
    stargazersCount: number,
    subscribersCount: number,
    networkCount: number,
    forks: number
    archived: boolean,
    disabled: boolean,
    language: string,
    topics: string[],
    defaultBranch: string,
  }
}

export {}

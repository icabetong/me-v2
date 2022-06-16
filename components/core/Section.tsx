import { FC, ReactNode } from "react"


type SectionProps = {
  className: string
  children: ReactNode[] | ReactNode
}

const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Section
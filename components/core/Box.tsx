import { FC, ReactNode } from "react"

type BoxProps = {
  children: ReactNode[] | ReactNode,
  className?: string,
}

const Box: FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl mx-auto p-5 px-7 md:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default Box
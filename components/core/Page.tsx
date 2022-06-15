import { FC, ReactNode } from "react";

type PageProps = {
  children: ReactNode | ReactNode[]
}
const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="bg-russian text-azureish-white">
      <div className="max-w-screen-xl column center min-h-screen mx-auto">
        {children}
      </div>
    </div>
  )
}
export default Page;
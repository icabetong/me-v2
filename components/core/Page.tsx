import { ReactNode } from "react";

type PageProps = {
  children: ReactNode | ReactNode[]
}
const Page = ({ children }: PageProps) => {
  return (
    <div className="bg-russian text-azureish-white">
      <div className="max-w-screen-xl column center min-h-screen mx-auto">
        {children}
      </div>
    </div>
  )
}
export default Page;
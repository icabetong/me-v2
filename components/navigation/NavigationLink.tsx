import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import { Route } from "./Route"

type NavigationLinkProps = {
  route: Route
}
const NavigationLink = (props: NavigationLinkProps) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const items = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.li 
      variants={items} 
      className="hover:bg-navajo-white md:hover:bg-transparent text-azureish-white hover:text-russian md:hover:text-navajo-white">
      <Link href={`#${props.route}`} className="block text-md py-2 pr-4 pl-3  rounded md:bg-transparent md:p-0" aria-current="page">
        <a>{t(`navigation.${props.route}`)}</a>
      </Link>
    </motion.li>
  )
}

export default NavigationLink
import { FC } from "react" 
import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"
import useBreakpoint from "../../../shared/hooks/use-breakpoint"

type NavigationLinkProps = {
  route: string
  type?: 'section' | 'page'
}
const NavigationLink: FC<NavigationLinkProps> = ({ route, type }) => {
  const { t } = useTranslation('common')
  const mdBreakpoint = useBreakpoint('md')
  const items = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.li
      variants={items}
      whileHover={{ scale: mdBreakpoint ? 1.1 : 1 }}
      className="py-2 my-2 rounded-md hover:bg-navajo-white md:hover:bg-transparent text-azureish-white hover:text-russian md:hover:text-navajo-white md:p-0 md:mx-0"
    >
      <a
        href={type === 'section' ? `/#${route}` : `/${route}`}
        className="w-full block text-md py-1 pr-4 pl-3 rounded md:bg-transparent md:p-0"
        aria-current="page"
      >
        {t(`navigation.${route}`)}
      </a>
    </motion.li>
  )
}

export default NavigationLink

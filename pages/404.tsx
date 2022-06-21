import { NextPage } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

const NotFound: NextPage = () => {
  const { t } = useTranslation('404')

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen bg-russian text-azureish-white font-inter px-12">
      <h1 className="text-8xl mb-8">404</h1>
      <div className="max-w-screen-md px-0 md:px-8 flex flex-col items-start justify-between">
        <h2 className="text-2xl font-semibold mb-1">{t("header")}</h2>
        <h3 className="text-gray-400">{t("summary")}</h3>

        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
          className="my-8">
          <Link href="/">
            <a className="bg-navajo-white text-russian font-medium px-8 py-2 rounded-full">{t("back-to-home")}</a>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

type NotFoundProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: NotFoundProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['404'])
  }
})

export default NotFound
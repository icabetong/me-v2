import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

const NotFound: NextPage = () => {
  const { t } = useTranslation('404')

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen bg-russian text-azureish-white font-inter px-8 md:px-12">
        <h1 className="text-8xl md:text-9xl mb-8">404</h1>
        <div className="max-w-screen-md px-0 md:px-8 flex flex-col items-start justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{t("header")}</h2>
          <h3 className="text-md md:text-lg text-gray-400">{t("summary")}</h3>

          <motion.div whileHover={{ scale: 1.1 }} className="my-8 h-fit">
            <Link href="/">
              <a className="bg-navajo-white text-russian font-medium px-4 md:px-8 py-2 cursor-pointer rounded-full">{t("back-to-home")}</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }: PageProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['404']))
  }
})

export default NotFound
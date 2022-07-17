import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

const Success: NextPage = () => {
  const { t } = useTranslation('success')

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="bg-russian text-azureish-white min-h-screen mx-auto flex flex-col font-inter">
        <Navigation/>
        <main className="box w-full py-24 md:py-32 flex-1 flex flex-col items-center justify-center">
          <div className="max-w-md bg-content-900 border-content-800 shadow rounded-md p-12 text-center">
            <svg className="w-14 h-14 text-aquamarine inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut"
                }}
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
              </motion.path>
            </svg>
            <h1 className="mt-4 font-semibold text-2xl text-navajo-white">{t("feedback.title")}</h1>
            <p className="">{t("feedback.summary")}</p>

            <div className="mt-8">
              <Link href="/">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="button">
                    {t("button.to-home")}
                </motion.a>
              </Link>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }: PageProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'success']))
  }
})

export default Success
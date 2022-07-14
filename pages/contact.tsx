import { useState, useEffect, FormEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HiPaperAirplane } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import Box from '../components/core/Box'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'

const ContactPage: NextPage = () => {
  const { t } = useTranslation('contact')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('success=true'))
      setSuccess(true)
  }, [])

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <main className="bg-russian text-azureish-white min-h-screen mx-auto flex flex-col">
        <Navigation/>
        <Box className="flex flex-col md:flex-row flex-1 py-24 md:py-32 md:space-x-16">
          <div className="flex flex-col justify-center space-y-4 flex-1 h-full">
            <h1 className="text-5xl text-navajo-white font-semibold font-inter">{t("header")}</h1>
            <h2 className="text-52xl text-azureish-white font-medium font-inter">{t("summary")}</h2>
            <p className="text-md font-inter my-4">{t("desc")}</p>
          </div>
          <div className="flex flex-col justify-center flex-1 h-full">
            <motion.form
              layout
              name="contact"
              action="/contact?success=true"
              data-netlify="true"
              method="POST"
              className="font-inter w-full flex flex-col items-center justify-center">
              <input
                required
                className="input"
                type="text" 
                placeholder={t("field.name")}
                name="name"
                aria-required="true"/>
              <input 
                required
                className="input"
                type="email" 
                name="email"
                placeholder={t("field.email")}
                aria-required="true"/>
              <input 
                required
                className="input"
                type="text" 
                name="subject"
                placeholder={t("field.subject")}
                aria-required="true"/>
              <textarea 
                className="input"
                rows={8} 
                name="body"
                placeholder={t("field.more")}
                aria-required="true"/>
              <AnimatePresence>
                {
                  success &&
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full text-aquamarine">
                    {t("feedback.success")}
                  </motion.div>
                }
              </AnimatePresence>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                type="submit" 
                className="button px-16 mt-4">
                <HiPaperAirplane className="w-4 h-4"/>
                <span className="font-medium">{t("button.send")}</span>
              </motion.button>
            </motion.form>
          </div>
        </Box>
      </main>
      <Footer/>
    </>
  )
}

export const getStaticProps = async ({ locale }: PageProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'contact'])
  }
})

export default ContactPage
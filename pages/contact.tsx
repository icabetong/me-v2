import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import Box from '../components/core/Box'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'

const ContactPage: NextPage = () => {
  const { t } = useTranslation('contact')
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  const onHandleSubmit = (data: ContactForm) => {
    console.log(data)
  }

  const variants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  }

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
            <h2 className="text-2xl text-azureish-white font-medium font-inter">{t("summary")}</h2>
            <p className="text-md font-inter my-4">{t("desc")}</p>
          </div>
          <div className="flex flex-col justify-center flex-1 h-full">
            <motion.form 
              layout
              onSubmit={handleSubmit(onHandleSubmit)} 
              className="font-inter w-full flex flex-col items-center justify-center">
              <input 
                className={'input '.concat(errors.name ? 'ring-2 ring-red-500' : '')} 
                type="text" 
                placeholder={t("field.name")}
                {...register("name", { required: true })}/>
              <motion.div
                layout
                layoutId="name-error"
                className="error"
                animate={
                  errors.name
                  ? { display: 'block', opacity: 1 }
                  : { display: 'none', opacity: 0 }
                }>
                {t("feedback.name-empty")}
              </motion.div>
              <motion.input 
                layout
                className={'input '.concat(errors.email ? 'ring-2 ring-red-500' : '')}
                type="email" 
                placeholder={t("field.email")}
                {...register("email", { required: "feedback.email-required" })}/>
              <motion.div
                layout
                layoutId="email-error"
                className="error"
                animate={
                  errors.email
                  ? { display: 'block', opacity: 1 }
                  : { display: 'none', opacity: 0 }
                }>
                {t("feedback.email-empty")}
              </motion.div>
              <motion.input 
                layout
                className={'input '.concat(errors.subject ? 'ring-2 ring-red-500' : '')} 
                type="text" 
                placeholder={t("field.subject")}
                {...register("subject", { required: "feedback.subject-required" })}/>
              <motion.div
                layout
                layoutId="subject-error"
                className="error"
                animate={
                  errors.subject
                  ? { display: 'block', opacity: 1 }
                  : { display: 'none', opacity: 0 }
                }>
                {t("feedback.subject-empty")}
              </motion.div>
              <motion.textarea 
                layout
                className={'input '.concat(errors.body ? 'ring-2 ring-red-500' : '')}
                rows={8} 
                placeholder={t("field.more")}
                {...register("body", { required: "feedback.body-required" })}/>
              <motion.div
                layout
                layoutId="body-error"
                className="error"
                animate={
                  errors.body
                  ? { display: 'block', opacity: 1 }
                  : { display: 'none', opacity: 0 }
                }>
                {t("feedback.body-empty")}
              </motion.div>
              <motion.button 
                layout
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
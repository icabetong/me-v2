import type { NextPage } from 'next'
import Head from "next/head"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Navigation from '../components/navigation/Navigation'

import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import WorksSection from '../components/sections/WorksSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import { LocaleProps } from '../shared/types'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>icabetong</title>
        <meta name="description" content="Personal Portfolio website of Isaiah Collins Abetong" />
      </Head>
      <main className="relative bg-russian text-azureish-white min-h-screen mx-auto">
        <HeroSection/>
        <div className="absolute inset-0 h-fit">
          <Navigation/>
        </div>
        <AboutSection/>
        <SkillsSection/>
        <WorksSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </>
  )
}

type HomeProps = LocaleProps
export const getStaticProps = async ({ locale }: HomeProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common'])
  }
})

export default Home
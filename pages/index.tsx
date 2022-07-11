import type { NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Navigation from '../components/navigation/Navigation'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import WorksSection from '../components/sections/WorksSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import data from '../data/data.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.site}</title>
      </Head>
      <main className="relative bg-russian text-azureish-white min-h-screen mx-auto">
        <HeroSection/>
        <div className="absolute inset-0 h-fit">
          <Navigation isAnimated/>
        </div>
        <AboutSection/>
        <SkillsSection/>
        <WorksSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export const getStaticProps = async ({ locale }: PageProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default Home
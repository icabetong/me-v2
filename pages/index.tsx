import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HeroSection = dynamic(() => import('../components/sections/HeroSection'))
const AboutSection = dynamic(
  () => import('../components/sections/AboutSection')
)
const SkillsSection = dynamic(
  () => import('../components/sections/SkillsSection')
)
const WorksSection = dynamic(
  () => import('../components/sections/WorksSection')
)
const ContactSection = dynamic(
  () => import('../components/sections/ContactSection')
)

import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'
import data from '../data/data.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.site}</title>
      </Head>
      <main className="relative bg-russian text-azureish-white min-h-screen mx-auto">
        <HeroSection />
        <div className="absolute inset-0 h-fit">
          <Navigation isAnimated />
        </div>
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }: PageProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home

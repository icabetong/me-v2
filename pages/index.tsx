import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const HeroSection = dynamic(
  () => import('../components/sections/hero/HeroSection'),
)
const AboutSection = dynamic(
  () => import('../components/sections/about/AboutSection'),
)
const SkillsSection = dynamic(
  () => import('../components/sections/skills/SkillsSection'),
)
const WorksSection = dynamic(
  () => import('../components/sections/works/WorksSection'),
)
const ContactSection = dynamic(
  () => import('../components/sections/contact/ContactSection'),
)

import Navigation from '../components/navigation/navigation-item/Navigation'
import Footer from '../components/sections/footer/Footer'
import data from '../data/data.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.siteName}</title>
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

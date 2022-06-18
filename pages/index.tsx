import { ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MetaHeadEmbed } from '@phntms/react-share'

import Navigation from '../components/navigation/Navigation'

import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import WorksSection from '../components/sections/WorksSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import { LocaleProps } from '../shared/types'
import data from '../data/data.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>icabetong</title>
        <meta name="theme-color" content="#0E0E14" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Personal Portfolio website of Isaiah Collins Abetong" />
      </Head>
      <MetaHeadEmbed 
        render={(meta: ReactNode) => <Head>{meta}</Head>}
        siteTitle={data.site} 
        description={data.desc} 
        baseSiteUrl={`https://${data.domain}`}
        pagePath=""
        keywords={[
          "isaiah abetong",
          "isaiah collins abetong",
          "central luzon state university",
          "web development",
          "mobile development",
          "app development"
        ]}
        imageUrl="https://raw.githubusercontent.com/icabetong/me/main/public/images/image-meta.png"
        imageAlt="Isaiah Collins Abetong Portfolio Site Image"
        twitter={{
          cardSize: "large",
          siteUsername: "@icabetong",
          creatorUsername: "@icabetong"
        }}/>
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
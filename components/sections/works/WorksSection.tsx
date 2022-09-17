import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  SiAndroid,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiKotlin,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

import Card from '../../core/card/Card'

import data from '../../../data/projects.json'

import coind from '../../../public/images/coind.webp'
import fokus from '../../../public/images/fokus.webp'
import movieous from '../../../public/images/movieous.webp'
import openauth from '../../../public/images/openauth.webp'
import zap from '../../../public/images/zap.webp'

const WorksSection = () => {
  const { t } = useTranslation()
  const headingAnim = useAnimation()
  const sectionAnim = useAnimation()
  const [headingRef, headingIsInView] = useInView({
    triggerOnce: true,
  })
  const [sectionRef, sectionIsInView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 0.2,
  })

  useEffect(() => {
    if (headingIsInView) headingAnim.start('visible')
  }, [headingIsInView, headingAnim])

  useEffect(() => {
    if (sectionIsInView) sectionAnim.start('visible')
  }, [sectionIsInView, sectionAnim])

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: 'spring',
        bounce: 0.6,
        duration: 0.8,
      },
    },
  }

  return (
    <section id="works" ref={sectionRef} className="bg-content-900 relative">
      <div className="box py-32">
        <div ref={headingRef}>
          <motion.h2
            initial="hidden"
            animate={headingAnim}
            variants={variants}
            className="font-semibold font-inter text-3xl text-azureish-white"
          >
            {t('section.works')}
          </motion.h2>
          <motion.div
            initial="hidden"
            animate={sectionAnim}
            variants={variants}
            className="flex flex-col items-center justify-center mt-8"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                name={data.fokus.name}
                description={data.fokus.description}
                image={fokus}
                frameworks={[SiAndroid, SiKotlin]}
                repo={data.fokus.repo}
              />
              <Card
                name={data.coind.name}
                description={data.coind.description}
                image={coind}
                frameworks={[SiFlutter, SiDart]}
                repo={data.coind.repo}
              />
              <Card
                name={data.openauth.name}
                description={data.openauth.description}
                image={openauth}
                frameworks={[SiFlutter, SiDart]}
                repo={data.openauth.repo}
              />
            </ul>
            <div className="py-8" />
            <ul className="grid grid-cols-1 gap-8">
              <Card
                name={data.movieous.name}
                description={data.movieous.description}
                image={movieous}
                frameworks={[SiReact, SiJavascript]}
                repo={data.movieous.repo}
              />
              <Card
                name={data.zap.name}
                description={data.zap.description}
                image={zap}
                frameworks={[SiReact, SiTypescript, SiNextdotjs]}
                repo={data.zap.repo}
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorksSection

import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import { SiAndroid, SiKotlin, SiFlutter, SiReact, SiJavascript, SiDart, SiTypescript, SiNextdotjs } from "react-icons/si"

import Card from "../Card"
import Box from "../core/Box"
import useBreakpoint from "../../shared/hooks/useBreakpoint"

import data from "../../data/projects.json"

import fokus from "../../public/images/fokus.webp"
import coind from "../../public/images/coind.webp"
import movieous from "../../public/images/movieous.webp"
import openauth from "../../public/images/openauth.webp"
import zap from "../../public/images/zap.webp"

const WorksSection = () => {
  const { t } = useTranslation()
  const headingAnim = useAnimation()
  const mobileAnim = useAnimation()
  const webAnim = useAnimation()
  const smBreakpoint = useBreakpoint('sm')
  const [headingRef, headingIsInView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 0.3
  })
  const [mobileRef, mobileIsInView] = useInView({
    triggerOnce: true,
    threshold: smBreakpoint ? 0.4 : undefined
  })
  const [webRef, webIsInView] = useInView({
    triggerOnce: true,
    threshold: smBreakpoint ? 0.4 : 0.02
  })

  useEffect(() => {
    if (headingIsInView) {
      headingAnim.start('visible')
    }
  }, [headingIsInView, headingAnim])

  useEffect(() => {
    if (mobileIsInView) mobileAnim.start('visible')
  }, [mobileIsInView, mobileAnim])

  useEffect(() => {
    if (webIsInView) webAnim.start('visible')
  }, [webIsInView, webAnim])

  const listVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="works" className="bg-content relative">
      <Box className="py-32">
        <div ref={headingRef} className="mx-14 md:mx-24">
          <motion.h2
            initial="hidden"
            animate={headingAnim}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  type: "spring",
                  bounce: 0.6,
                  duration: 0.8
                }
              }
            }} 
            className="font-semibold font-inter text-3xl text-azureish-white">
              {t("section.works")}
          </motion.h2>
          <div className="flex flex-col items-center justify-center mt-8">
            <motion.ul
              ref={mobileRef}
              initial="hidden"
              animate={mobileAnim}
              variants={listVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                name={data.fokus.name}
                description={data.fokus.description}
                image={fokus}
                frameworks={[SiAndroid, SiKotlin]}
                repo={data.fokus.repo}/>
              <Card
                name={data.coind.name}
                description={data.coind.description}
                image={coind}
                frameworks={[SiFlutter, SiDart]}
                repo={data.coind.repo}/>
              <Card
                name={data.openauth.name}
                description={data.openauth.description}
                image={openauth}
                frameworks={[SiFlutter, SiDart]}
                repo={data.openauth.repo}/>
            </motion.ul>
            <div className="py-8"/>
            <motion.ul
              ref={webRef}
              initial="hidden"
              animate={webAnim}
              variants={listVariants}
              className="grid grid-cols-1 gap-8">
              <Card
                name={data.movieous.name}
                description={data.movieous.description}
                image={movieous}
                frameworks={[SiReact, SiJavascript]}
                repo={data.movieous.repo}/>
              <Card
                name={data.zap.name}
                description={data.zap.description}
                image={zap}
                frameworks={[SiReact, SiTypescript, SiNextdotjs]}
                repo={data.zap.repo}/>
            </motion.ul>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default WorksSection
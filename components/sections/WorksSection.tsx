import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import { SiAndroid, SiKotlin, SiFlutter, SiReact, SiJavascript, SiDart, SiTypescript, SiNextdotjs } from "react-icons/si"

import Card from "../Card"
import Box from "../core/Box"

import data from "../../data/projects.json"

import fokus from "../../public/images/fokus.jpg"
import coind from "../../public/images/coind.jpg"
import movieous from "../../public/images/movieous.jpg"
import openauth from "../../public/images/openauth.jpg"
import zap from "../../public/images/zap.jpg"

const WorksSection = () => {
  const { t } = useTranslation()
  const headingAnim = useAnimation()
  const sectionAnim = useAnimation()
  const [headingRef, headingIsInView] = useInView({
    triggerOnce: true
  })
  const [sectionRef, sectionIsInView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (headingIsInView) 
      headingAnim.start('visible')
  }, [headingIsInView, headingAnim])

  const variants = {
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
  }

  return (
    <section ref={sectionRef} id="works" className="bg-content relative">
      <Box className="py-32">
        <div ref={headingRef} className="mx-14 md:mx-24">
          <motion.h2
            initial="hidden"
            animate={headingAnim}
            variants={variants} 
            className="font-semibold font-inter text-3xl text-azureish-white">
              {t("section.works")}
          </motion.h2>
          <div className="flex flex-col items-center justify-center mt-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </ul>
            <div className="py-8"/>
            <ul className="grid grid-cols-1 gap-8">
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
            </ul>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default WorksSection
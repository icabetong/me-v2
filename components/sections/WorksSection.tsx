import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import ProjectCard from "../ProjectCard"
import Box from "../core/Box"
import { mobile, web } from "../../data/projects"

const WorksSection = () => {
  const { t } = useTranslation()
  const headingAnim = useAnimation()
  const mobileAnim = useAnimation()
  const webAnim = useAnimation()
  const [headingRef, headingIsInView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 0.3
  })
  const [mobileRef, mobileIsInView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 1
  })
  const [webRef, webIsInView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 1
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
              {
                mobile.map((project) => {
                  return (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      control={mobileAnim}
                      description={project.description}
                      image={project.image}
                      repo={project.repo}/>
                  )
                })
              }
            </motion.ul>
            <div className="py-8"/>
            <motion.ul
              ref={webRef}
              initial="hidden"
              animate={webAnim}
              variants={listVariants}
              className="grid grid-cols-1">
              {
                web.map((project) => {
                  return (
                    <ProjectCard
                      key={project.name}
                      name={project.name}
                      control={webAnim}
                      description={project.description}
                      image={project.image}
                      repo={project.repo}/>
                  )
                })
              }
            </motion.ul>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default WorksSection
import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Box from "../core/Box"
import data from "../../data/common"
import me from "../../public/images/me.webp"


const AboutSection = () => {
  const { t } = useTranslation('common')
  const control = useAnimation()
  const [ref, isInView] = useInView({
    root: null,
    threshold: 0.6
  })

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    }
  }, [control, isInView])

  const intro = t("about.intro")
  return (
    <section id="about" className="bg-content relative">
      <Box className="py-32">
        <div ref={ref} className="flex flex-col items-center justify-center">
          <motion.h2
            initial="hidden"
            animate={control}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4
                }
              }
            }}
            className="mb-4 font-semibold font-inter text-3xl text-azureish-white">
            {t("section.about")}
          </motion.h2>
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row mt-8 mx-14 lg:mx-24">
            <div className="flex-3 flex flex-col items-center justify-center lg:items-start lg:mr-14">
              <motion.h6 
                initial="hidden"
                animate={control}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0, 
                    opacity: 1,
                    transition: {
                      delay: 0.6,
                      type: "spring",
                      bounce: 0.6,
                      duration: 2,
                    }
                  }
                }}
                className="max-w-sm mt-8 text-3xl text-aquamarine font-firacode mb-8 text-center lg:mt-0 lg:text-start md:text-4xl">
                {data.fullName}
              </motion.h6>
              { 
                intro.split('\n').map((paragraph) => {
                  return (
                    <motion.p
                      initial="hidden"
                      animate={control}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                          opacity: 1,
                          transition: {
                            delay: 1
                          }
                        }
                      }}
                      key={paragraph} 
                      className="text-lg font-inter my-2">
                      {paragraph}
                    </motion.p>
                  )
                })
              }
            </div>
            <div className="flex-1 flex flex-col items-center justify-center md:justify-start md:pr-8">
              <motion.div  
                initial="hidden"
                animate={control}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      delay: 0.8
                    }
                  }
                }}
                className="w-64 h-64">
                <Image
                  src={me} 
                  alt={t('alt.profile')}
                  className="rounded-xl"/>
              </motion.div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default AboutSection
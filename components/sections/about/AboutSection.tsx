import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import me from '../../../public/images/me.webp'
import useBreakpoint from '../../../shared/hooks/use-breakpoint'

const AboutSection = () => {
  const { t } = useTranslation()
  const smBreakpoint = useBreakpoint('sm')
  const control = useAnimation()
  const [ref, isInView] = useInView({
    root: null,
    threshold: smBreakpoint ? 0.6 : 0.1,
  })

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    }
  }, [control, isInView])

  const intro = t('about.intro')
  return (
    <section id="about" className="bg-content-900 relative">
      <div className="box py-32">
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
                  delay: 0.4,
                },
              },
            }}
            className="mb-4 font-semibold font-inter text-3xl text-navajo-white"
          >
            {t('section.about')}
          </motion.h2>
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row mt-8">
            <div className="flex-3 flex flex-col items-center justify-center lg:items-start lg:mr-14">
              {intro.split('\n').map(paragraph => {
                return (
                  <motion.p
                    initial="hidden"
                    animate={control}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: 1,
                        },
                      },
                    }}
                    key={paragraph}
                    className="text-lg text-center lg:text-start font-inter my-2 lg:mr-8"
                  >
                    {paragraph}
                  </motion.p>
                )
              })}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div
                initial="hidden"
                animate={control}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.8,
                    },
                  },
                }}
                className="w-64 h-64"
              >
                <Image
                  src={me}
                  alt={t('alt.profile')}
                  width="256"
                  height="256"
                  priority={true}
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

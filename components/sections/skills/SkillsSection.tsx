import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { getIcon, skills } from '../../../data/skills'

const SkillsSection = () => {
  const { t } = useTranslation()
  const control = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 1,
  })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <section id="skills" className="relative">
      <div className="box py-16 md:py-32 flex flex-col items-center justify-center md:flex-row">
        <div ref={ref} className="flex-initial">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={control}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.2,
                  duration: 2,
                },
              },
            }}
            className="text-3xl font-semibold font-inter"
          >
            {t('section.skills')}
          </motion.h2>
        </div>
        <div className="flex-initial md:w-36" />
        <div className="flex-1">
          <motion.ul
            initial="hidden"
            animate={control}
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-12 md:mt-0"
          >
            {skills.map(skill => {
              return (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.1, color: '#ACDBFF' }}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  className="flex flex-col items-center justify-center p-4"
                >
                  {React.createElement(getIcon(skill), {
                    className: 'text-2xl mb-4',
                  })}
                  <span className="font-inter">{t(`dev.${skill}`)}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

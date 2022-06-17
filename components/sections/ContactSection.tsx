import { useEffect } from "react"
import { useTranslation } from "next-i18next"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Box from "../core/Box"
import data from "../../data/common"

const ContactSection = () => {
  const { t } = useTranslation()
  const control = useAnimation()
  const [ref, isInView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (isInView) 
      control.start('visible')
  }, [control, isInView])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y:0, opacity: 1 }
  }

  return (
    <section id="contact" className="relative">
      <Box className="py-16">
        <motion.div
          initial="hidden"
          animate={control}
          ref={ref}
          variants={containerVariants}
          className="flex flex-col items-center justify-center">
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-4xl text-navajo-white text-center font-inter font-semibold">
            {t("contact.header")}
          </motion.h2>
          <motion.h6 
            variants={itemVariants}
            className="text-lg text-center font-inter">
            {t("contact.summary")}
          </motion.h6>
          <motion.div
            variants={itemVariants}
            className="p-6">
            <motion.a
              href={data.mail}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
              className="py-4 px-20 bg-navajo-white text-russian text-lg font-inter font-semibold rounded-full">
              {t("button.say-hello")}
            </motion.a>
          </motion.div>
        </motion.div>
      </Box>
    </section>
  )
}

export default ContactSection
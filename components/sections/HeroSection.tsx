import { useTranslation } from "next-i18next"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Engine } from "tsparticles-engine"
import { motion } from "framer-motion"
import { DownloadIcon } from "@heroicons/react/outline"

import Box from "../core/Box"
import Section from "../core/Section"
import particlesConfig from "../../shared/particles/config"
import data from "../../data/common"

const HeroSection = () => {
  const { t } = useTranslation('common')

  const onParticlesStart = async (engine: Engine) => {
    loadSlim(engine)
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <Section className="relative">
      <Particles
        id="hero-background"
        init={onParticlesStart} 
        options={particlesConfig as any}
        className="h-full object-cover absolute w-full"
        canvasClassName="will-change-auto h-full"/>
      <Box className="relative">
        <div className="py-60 px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.8,
                  staggerChildren: 0.4
                }
              }}}>
            <div className="flex flex-col py-0 flex-grow space-y-4">
              <motion.div 
                variants={item} 
                className="my-2 text-3xl font-firacode font-medium text-azureish-white">
                {t("hero.greet")}
              </motion.div>
              <motion.div 
                variants={item} 
                className="mb-4 text-7xl font-firacode font-medium text-aquamarine">
                {data.name}
              </motion.div>
              <motion.div 
                variants={item} 
                className="text-2xl font-firacode font-semibold text-cornfields">
                {data.position}
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-10 text-lg text-azureish-white font-inter max-w-sm lg:max-w-md">
              {t("hero.summary")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
                className="w-fit mt-8 px-4 py-2 rounded-full bg-navajo-white text-russian flex flex-row items-center justify-center cursor-pointer">
                <span className="mx-2 font-semibold font-inter">
                  {t("button.download-resume")}
                </span>
                <DownloadIcon className="w-6 h-6 inline-block"/>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Box>
    </Section>
  )
}

export default HeroSection 
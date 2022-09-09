import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import Box from '../core/Box'
import data from '../../data/data.json'
import ParticlesContainer from '../core/ParticlesContainer'

const HeroSection = () => {
  const { t } = useTranslation()

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <section className="relative">
      <ParticlesContainer />
      <Box className="relative">
        <div className="py-40 md:py-60">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <div className="flex flex-col py-0 flex-grow space-y-2 md:space-y-4">
              <motion.div
                variants={item}
                className="my-2 text-3xl font-firacode font-medium text-azureish-white"
              >
                {t('hero.greet')}
              </motion.div>
              <motion.div
                variants={item}
                className="mb-4 text-6xl md:text-7xl font-firacode font-medium text-aquamarine"
              >
                {data.name}
              </motion.div>
              <motion.div
                variants={item}
                className="text-2xl font-firacode font-semibold text-cornfields"
              >
                {data.position}
              </motion.div>
            </div>
            <motion.div
              // Use non-zero opacity for LCP optimization
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 text-lg text-azureish-white font-inter max-w-sm lg:max-w-md"
            >
              {t('hero.summary')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-row items-center justify-start space-x-4 mt-8"
            >
              <motion.a
                target="_blank"
                role="link"
                rel="noopener noreferrer"
                href={data.github}
                aria-label="GitHub"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
                className="icon-button"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                target="_blank"
                role="link"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                href={data.linkedin}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
                className="icon-button"
              >
                <FiLinkedin />
              </motion.a>
              <span className="text-gray-500 font-medium">{t('misc.or')}</span>
              <motion.a
                target="_blank"
                role="link"
                rel="noopener noreferrer"
                href={data.resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
                className="button"
              >
                <span className="mx-2 font-semibold font-inter text-center">
                  {t('button.download-resume')}
                </span>
                <HiOutlineDownload className="w-6 h-6 inline-block" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Box>
    </section>
  )
}

export default HeroSection

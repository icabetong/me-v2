import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { IconType } from 'react-icons'
import { SiGithub } from 'react-icons/si'

type CardProps = {
  name: string
  description: string
  repo: string
  frameworks: IconType[]
  image: StaticImageData
  width?: string
  height?: string
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  repo,
  frameworks,
  image,
}) => {
  const { t } = useTranslation()

  const linkVariants = {
    rest: {
      display: 'none',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.2,
        type: 'tween',
      },
    },
    hover: {
      display: 'flex',
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  }
  const nameVariants = {
    rest: {
      x: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      x: -30,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  }
  const buttonVariants = {
    rest: {
      y: 20,
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
      },
    },
  }

  return (
    <motion.li
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex flex-col items-center justify-baseline"
    >
      <div className="h-76 overflow-hidden">
        <Image priority src={image} alt={t('alt.screenshot', { name: name })} />
      </div>
      <motion.div className="mt-2 mb-4 font-clashgrotesk font-medium text-2xl text-navajo-white flex flex-row items-center justify-center">
        <motion.div variants={nameVariants}>{name}</motion.div>
        <motion.div
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
          className="grid grid-cols-2 gap-3"
        >
          {frameworks.map(icon =>
            React.createElement(icon, { key: icon.toString() }),
          )}
        </motion.div>
      </motion.div>
      <p className="max-w-xs px-2 text-center font-inter">{t(description)}</p>
      <motion.a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        whileHover={{ scale: 1.1 }}
        className="button mt-4"
      >
        <SiGithub />
        <span className="ml-2 text-sm">{t('button.view-github')}</span>
      </motion.a>
    </motion.li>
  )
}

export default Card

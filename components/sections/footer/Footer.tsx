import { motion, useAnimation } from 'framer-motion'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi'
import { TbGitFork, TbStar } from 'react-icons/tb'
import { useInView } from 'react-intersection-observer'
import data from '../../../data/data.json'

const Footer = () => {
  const [repository, setRepository] = useState<RepositoryData | null>(null)
  const { t } = useTranslation('common')
  const control = useAnimation()
  const [ref, isInView] = useInView({
    triggerOnce: false,
    root: null,
    threshold: 0.1,
  })

  useEffect(() => {
    const fetchRepository = async () => {
      const response = await fetch('/api/github/me-v2')
      const data = await response.json()
      setRepository(data)
    }

    fetchRepository()
  }, [])

  useEffect(() => {
    if (isInView) control.start('visible')
  }, [control, isInView])

  return (
    <footer
      ref={ref}
      className="bg-footer text-azureish-white relative min-h-md py-8"
    >
      <div className="box flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate={control}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.6,
                duration: 1.4,
              },
            },
          }}
          className="w-fit grid grid-cols-5 gap-8"
        >
          <motion.a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
            className="icon-button"
            aria-label="GitHub"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
            className="icon-button"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href={data.mail}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
            className="icon-button"
            aria-label="Email"
          >
            <FiMail />
          </motion.a>
          <motion.a
            href={data.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
            className="icon-button"
            aria-label="Twitter"
          >
            <FiTwitter />
          </motion.a>
          <motion.a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
            className="icon-button"
            aria-label="Instagram"
          >
            <FiInstagram />
          </motion.a>
        </motion.div>
        <span className="mt-4 font-inter text-gray-400 text-center">
          <Trans
            i18nKey={t('misc.copyright')}
            values={{
              me: data.fullName,
            }}
            components={{
              focus: <span className="text-azureish-white font-semibold" />,
            }}
          />
        </span>
        {repository && (
          <Link href={`${data.github}/me-v2`}>
            <div className="flex flex-row mt-2 cursor-pointer px-4 py-2">
              <div className="flex flex-row items-center justify-center">
                <TbStar />
                <span className="mx-2 text-azureish-white">
                  {repository?.stargazersCount}
                </span>
              </div>
              <div className="flex flex-row items-center justify-center">
                <TbGitFork />
                <span className="mx-2 text-azureish-white">
                  {repository?.forks}
                </span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer

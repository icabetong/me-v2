import { useTranslation } from "next-i18next"
import Image from "next/image"
import { motion, AnimationControls } from "framer-motion"
import { FiGithub } from "react-icons/fi"
import { Project } from "../data/projects"

type ProjectCardProps = Project & {
  control?: AnimationControls
}

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation()
  const { control, ...project } = props

  const linkVariants = {
    rest: { 
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
        type: "tween"
      }
    },
    hover: { 
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn"
      }
    }
  }
  const nameVariants = {
    rest: { 
      x: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: { 
      x: -30,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.li 
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex flex-col items-center justify-baseline">
      <div className="h-76 overflow-hidden">
        <Image 
          src={project.image}
          alt={t("alt.screenshot", { name: project.name })}/>
      </div>
      <motion.div className="mt-2 mb-4 font-firacode font-semibold text-xl text-navajo-white flex flex-row items-center justify-center">
        <motion.h6
          variants={nameVariants}>
          {project.name}
        </motion.h6>
        <motion.a
          href={project.repo}
          target="_blank"
          variants={linkVariants}
          className="cursor-pointer">
          <FiGithub/>
        </motion.a>
      </motion.div>
      <p className="max-w-xs px-2 text-center font-inter">
        {t(project.description)}
      </p>
    </motion.li>
  )
}

export default ProjectCard
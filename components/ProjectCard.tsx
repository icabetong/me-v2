import { useTranslation } from "next-i18next"
import Image from "next/image"
import { motion, AnimationControls } from "framer-motion"
import { Project } from "../data/projects"

type ProjectCardProps = Project & {
  control?: AnimationControls
}

const ProjectCard = (props: ProjectCardProps) => {
  const { t } = useTranslation()
  const { control, ...project } = props

  return (
    <motion.li 
      initial="hidden"
      animate={control}
      variants={{
        hidden: { y: 20, opacity: 1 },
        visible: {
          y: 0,
          opacity: 1
        }
      }}
      className="flex flex-col items-center justify-baseline">
      <div className="h-76 overflow-hidden">
        <Image 
          src={project.image}
          alt={t("alt.screenshot", { name: project.name })}/>
      </div>
      <h6 className="mt-2 mb-4 font-firacode font-semibold text-xl text-navajo-white">
        {project.name}
      </h6>
      <p className="max-w-xs px-2 text-center font-inter">
        {t(project.description)}
      </p>
    </motion.li>
  )
}

export default ProjectCard
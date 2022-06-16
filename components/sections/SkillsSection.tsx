import React from "react"
import { useTranslation } from "next-i18next"
import Box from "../core/Box"
import { skills, getIcon } from "../../data/skills"

const SkillsSection = () => {
  const { t } = useTranslation()

  return (
    <section id="skills">
      <Box className="py-16 md:py-32 flex flex-col items-center justify-center md:flex-row">
        <div className="flex-initial md:ml-24">
          <h2 className="text-3xl font-semibold font-inter">{t("section.skills")}</h2>
        </div>
        <div className="flex-initial md:w-36"/>
        <div className="flex-1">
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-12 md:mt-0">
            {
              skills.map((skill) => {
                return (
                  <li key={skill} className="flex flex-col items-center justify-center p-4">
                    {React.createElement(getIcon(skill), { className: "text-2xl mb-4" })}
                    <span>{t(`dev.${skill}`)}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Box>
    </section>
  )
}

export default SkillsSection
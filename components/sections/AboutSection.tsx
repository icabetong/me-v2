import { useTranslation } from "next-i18next"
import Image from "next/image"

import Box from "../core/Box"
import data from "../../data/common"
import me from "../../public/images/me.webp"

const AboutSection = () => {
  const { t } = useTranslation('common')

  const intro = t("about.intro")
  return (
    <section id="about" className="bg-content">
      <Box className="py-32 flex flex-col items-center justify-center">
      <h2 className="mb-4 font-semibold font-inter text-3xl text-azureish-white">{t("section.about")}</h2>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row mt-8 mx-14 md:mx-24">
          <div className="flex-3 flex flex-col items-center justify-center md:items-start md:mr-14">
            <h6 className="max-w-sm mt-8 text-3xl text-aquamarine font-firacode mb-8 text-center md:mt-0 md:text-start md:text-4xl">
              {data.fullName}
            </h6>
            { 
              intro.split('\n').map((paragraph) => {
                return (
                  <p key={paragraph} className="text-lg font-inter my-2">
                    {paragraph}
                  </p>
                )
              })
            }
          </div>
          <div className="flex-1 flex flex-col items-center justify-center md:justify-start md:pr-8">
            <div className="w-64 h-64">
              <Image 
                src={me} 
                alt={t('alt.profile')}
                className="rounded-xl"/>
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default AboutSection
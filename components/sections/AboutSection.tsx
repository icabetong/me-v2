import { useTranslation } from "next-i18next"
import Image from "next/image"

import Box from "../core/Box"
import data from "../../data/common"
import me from "../../public/images/me.webp"

const AboutSection = () => {
  const { t } = useTranslation('common')

  return (
    <section id="about" className="bg-content">
      <Box className="py-20 flex flex-col items-center justify-center">
      <h5 className="mb-4 font-semibold font-inter text-3xl text-azureish-white">{t("section.about")}</h5>
        <div className="flex flex-row mt-8">
          <div className="flex-1 pl-8 pr-4">
            <h6 className="text-3xl text-aquamarine font-firacode mb-8">
              {data.fullName}
            </h6>
            <p className="text-lg font-inter">
              {t("about.intro", { interpolation: { escapeValue: true } })}
            </p>
          </div>
          <div className="flex-1 px-4 flex items-center justify-start">
            <div className="w-64 h-64 rounded-lg">
              <Image 
                src={me} 
                alt={t('alt.profile')}
                />
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default AboutSection
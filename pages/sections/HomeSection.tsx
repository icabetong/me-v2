import { useTranslation, Trans } from "next-i18next"
import Particles from "react-tsparticles"
import particlesConfig from "../../shared/particles/config"

const HomeSection = () => {
  const { t } = useTranslation('common')

  return (
    <section className="px-4 relative">
      <Particles
        className="h-full object-cover absolute w-full"
        canvasClassName="will-change-auto h-full"
        options={particlesConfig as any}/>
    </section>
  )
}

export default HomeSection
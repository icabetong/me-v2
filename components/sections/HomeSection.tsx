import { useTranslation } from "next-i18next"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import particlesConfig from "../../shared/particles/config"

const HomeSection = () => {
  const { t } = useTranslation('common')

  return (
    <section className="px-4 relative h-full">
      <div className="bg-cornfields h-full"></div>
    </section>
  )
}

export default HomeSection
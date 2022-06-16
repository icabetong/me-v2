import { useTranslation } from "next-i18next"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Engine } from "tsparticles-engine"

import Box from "../core/Box"
import Section from "../core/Section"
import data from "../../data/common"
import particlesConfig from "../../shared/particles/config"

const HeroSection = () => {

  const onParticlesStart = async (engine: Engine) => {
    loadSlim(engine)
  }

  return (
    <Section className="relative">
      <Particles
        id="hero-background"
        init={onParticlesStart} 
        options={particlesConfig as any}
        className="h-full object-cover absolute w-full"
        canvasClassName="will-change-auto h-full"/>
      <Box className="relative">
        <div className="py-80 px-4">
          <span className="text-bold text-azureish-white">
          </span>
        </div>
      </Box>
    </Section>
  )
}

export default HeroSection 
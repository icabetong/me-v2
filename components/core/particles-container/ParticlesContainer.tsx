import Particles from 'react-tsparticles'
import { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import particlesConfig from '../../../shared/particles/config'

const ParticlesContainer = () => {
  const onParticlesStart = async (engine: Engine) => loadSlim(engine)

  return (
    <Particles
      id="hero-background"
      init={onParticlesStart}
      options={particlesConfig as any}
      className="h-full object-cover absolute w-full"
      canvasClassName="will-change-auto h-full"
    />
  )
}

export default ParticlesContainer

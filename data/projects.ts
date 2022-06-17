import { StaticImageData } from "next/image"
import fokus from "../public/images/fokus.webp"
import coind from "../public/images/coind.webp"
import movieous from "../public/images/movieous.webp"
import openauth from "../public/images/openauth.webp"

export type Project = {
  image: StaticImageData,
  name: string,
  description: string
}

export const mobile: Project[] = [
  { image: fokus, name: "fokus", description: "works.fokus" },
  { image: coind, name: "coind", description: "works.coind" },
  { image: openauth, name: "openauth", description: "works.openauth" },
  
]

export const web: Project[] = [
  { image: movieous, name: "movieous", description: "works.movieous" },
]
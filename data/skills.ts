import {
  SiAndroid,
  SiKotlin,
  SiJava,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiVuedotjs,
  SiSvelte,
} from 'react-icons/si'

export type Skill =
  | 'android'
  | 'kotlin'
  | 'java'
  | 'flutter'
  | 'javascript'
  | 'typescript'
  | 'sql'
  | 'mongodb'
  | 'nodejs'
  | 'reactjs'
  | 'nextjs'
  | 'expressjs'
  | 'vuejs'
  | 'svelte'

export const skills: Skill[] = [
  'android',
  'kotlin',
  'java',
  'flutter',
  'javascript',
  'typescript',
  'sql',
  'mongodb',
  'nodejs',
  'reactjs',
  'nextjs',
  'expressjs',
  'vuejs',
  'svelte',
]

export function getIcon(skill: Skill) {
  switch (skill) {
    case 'android':
      return SiAndroid
    case 'kotlin':
      return SiKotlin
    case 'java':
      return SiJava
    case 'flutter':
      return SiFlutter
    case 'javascript':
      return SiJavascript
    case 'typescript':
      return SiTypescript
    case 'sql':
      return SiMysql
    case 'mongodb':
      return SiMongodb
    case 'nodejs':
      return SiNodedotjs
    case 'reactjs':
      return SiReact
    case 'nextjs':
      return SiNextdotjs
    case 'expressjs':
      return SiExpress
    case 'vuejs':
      return SiVuedotjs
    case 'svelte':
      return SiSvelte
  }
}

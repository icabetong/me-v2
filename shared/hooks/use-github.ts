import { useEffect, useState } from 'react'
import { getRepositoryData } from '../utils/get-repository-data'

export default function useGitHub(name: string) {
  const [data, setData] = useState<RepositoryData | null>(null)

  useEffect(() => {
    getRepositoryData(name).then((data) => {
      setData(data)
    })
  }, [])

  return data
}

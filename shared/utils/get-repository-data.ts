import caseCoverter from "./case-coverter"

const ENDPOINT = 'https://api.github.com/repos/'
export async function getRepositoryData(repository: string): Promise<RepositoryData | null> {
  if (repository.length === 0) return null

  const response = await fetch(`${ENDPOINT}icabetong/${repository}`)
  const data = await response.json()
  
  return caseCoverter<RepositoryData>(data)
}
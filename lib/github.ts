const endpoint = 'https://api.github.com/repos'

export async function getRepositoryData(
  repositoryName: string,
  user: string | undefined = 'icabetong',
): Promise<any> {
  if (repositoryName.length === 0)
    throw Error('Repository name is null or empty')

  const res = await fetch(`${endpoint}/${user}/${repositoryName}`)
  return await res.json()
}

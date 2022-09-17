import type { NextApiRequest, NextApiResponse } from 'next'
import { getRepositoryData } from '../../../lib/github'
import caseCoverter from '../../../shared/utils/case-coverter'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query
  if (!name || typeof name !== 'string') return

  const data = await getRepositoryData(name)
  res.status(200).json(caseCoverter(data))
}

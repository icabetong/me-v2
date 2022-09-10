import { getRepositoryData } from './get-repository-data'

describe('getRepositoryData', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ stargazers_count: 0, watchers: 0 }),
      }),
    )
  })
  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should match the result with the snapshot', async () => {
    const result = await getRepositoryData('foo')

    expect(result).toEqual({
      stargazersCount: 0,
      watchers: 0,
    })
  })
})

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from '.'

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
          url: 'img1.jpg',
        },
        {
          userId: 1,
          id: 2,
          title: 'title2',
          body: 'body2',
          url: 'img2.jpg',
        },
        {
          userId: 1,
          id: 3,
          title: 'title3',
          body: 'body3',
          url: 'img3.jpg',
        },
      ]),
    )
  }),
]
const server = setupServer(...handlers)

describe('<Home />', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
  })
  it('should render search, posts and load more', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('Nenhum post encontrado')

    await waitForElementToBeRemoved(noMorePosts)
  })
})

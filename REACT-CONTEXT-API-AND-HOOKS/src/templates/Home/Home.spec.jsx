import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from '.'
import userEvent from '@testing-library/user-event'

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

    expect.assertions(3)

    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/type your search/i)
    expect(search).toBeInTheDocument()

    const images = screen.getAllByRole('img', { name: /title/i })
    expect(images).toHaveLength(2)

    const button = screen.getByRole('button', { name: /Load More Posts/i })
    expect(button).toBeInTheDocument()
  })
  it('should search for posts', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('Nenhum post encontrado')

    expect.assertions(10)

    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/type your search/i)

    expect(screen.getByRole('heading', { name: '1 - title1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '2 - title2' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: '3 - title3' })).not.toBeInTheDocument()

    await userEvent.type(search, 'title1')
    expect(screen.getByRole('heading', { name: '1 - title1' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: '2 - title2' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: '3 - title3' })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Search Value: title1' })).toBeInTheDocument()

    await userEvent.clear(search)
    expect(screen.getByRole('heading', { name: '1 - title1' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '2 - title2' })).toBeInTheDocument()

    await userEvent.type(search, 'blabla')
    expect(screen.getByText('Nenhum post encontrado')).toBeInTheDocument()
  })
  it('should load more posts', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('Nenhum post encontrado')

    expect.assertions(2)

    await waitForElementToBeRemoved(noMorePosts)

    const button = screen.getByRole('button', { name: /load more posts/i })

    await userEvent.click(button)

    expect(screen.getByRole('heading', { name: '3 - title3' })).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
})

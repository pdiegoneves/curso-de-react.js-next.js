import { useEffect } from 'react'
import { Posts } from '../../components/Posts'
import { CounterProvider } from '../../contexts/CounterProvider'
import { PostsProvider } from '../../contexts/PostsProvider'
import './styles.css'
import { useHistory } from 'react-router-dom'

export function App() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/abc')
    }, 5000)
  }, [])
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  )
}

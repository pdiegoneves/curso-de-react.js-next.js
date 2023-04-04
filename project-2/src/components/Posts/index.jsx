import { useContext, useEffect, useRef } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import { loadPosts } from '../../contexts/PostsProvider/actions'
import { CounterContext } from '../../contexts/CounterProvider/context'
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/CounterProvider/actions'
export const Posts = () => {
  const isMounted = useRef(true)
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  const counterContext = useContext(CounterContext)
  const { counterState, counterDispatch } = counterContext

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch()
      }
      return () => {
        isMounted.current = false
      }
    })
  }, [postsDispatch])
  return (
    <div>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <strong>{counterState.counter}</strong>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts</strong>
        </p>
      )}
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  )
}

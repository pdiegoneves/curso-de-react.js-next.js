import P from 'prop-types'
import './App.css'
import { useEffect, useMemo, useState } from 'react'

const Post = ({ post }) => {
  console.log('Filho renderizou')
  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
}

function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')

  console.log('O Pai renderizou!')

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r))
    }, 5000)
  }, [])
  return (
    <div className="App">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        )
      }, [posts])}
      {}
      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  )
}

export default App

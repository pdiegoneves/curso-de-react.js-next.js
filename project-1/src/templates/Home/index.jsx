import { useState, useEffect, useCallback } from 'react'

const useAsync = () => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  const run = useCallback(() => {}, [])
}

export const Home = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const json = await data.json()
      setPosts(json)
      return json
    }

    fetchData()
  }, [])
  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}

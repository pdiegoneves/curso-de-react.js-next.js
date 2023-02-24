/* eslint-disable */
import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleDateString())
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const jsonResult = await response.json()
        setResult(jsonResult)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        throw e
      }
    }

    fetchData()
  }, [url, options])

  return [result, options]
}
export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) {
    return <p>Loading...</p>
  }

  if (!loading && result) {
    console.log(result)
  }

  return <h1>Oi</h1>
}

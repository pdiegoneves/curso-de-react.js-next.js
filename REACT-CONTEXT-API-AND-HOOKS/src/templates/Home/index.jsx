import { useCounterContext } from '../../contexts/CounterContext'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [state, actions] = useCounterContext()

  useEffect(() => {
    actions.increase()
  }, [actions])

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Oi</h1>
    </div>
  )
}

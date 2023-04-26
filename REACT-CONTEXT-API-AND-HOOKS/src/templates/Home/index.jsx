import { useCounterContext } from '../../contexts/CounterContext'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'

export const Home = () => {
  const [state, actions] = useCounterContext()

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
      </div>
    </div>
  )
}

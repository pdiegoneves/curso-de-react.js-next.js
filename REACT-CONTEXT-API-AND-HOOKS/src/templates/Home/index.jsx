import { useCounterContext } from '../../contexts/CounterContext'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'

export const Home = () => {
  const [state, actions] = useCounterContext()

  const handleError = async () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message))
  }

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>Set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Error
        </Button>
      </div>
    </div>
  )
}

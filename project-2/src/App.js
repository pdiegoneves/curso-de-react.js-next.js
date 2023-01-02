import P from 'prop-types'
import './App.css'
import React, { useCallback, useMemo, useState } from 'react'

const Button = ({ incrementButton }) => {
  console.log('filho renderizou')

  return <button onClick={() => incrementButton(100)}>+</button>
}

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num)
  }, [])

  console.log('pai renderizou')
  return (
    <div className="App">
      <p>Test 3</p>
      <h1>C1: {counter}</h1>
      {useMemo(() => {
        return <Button incrementButton={incrementCounter} />
      }, [incrementCounter])}
    </div>
  )
}

export default App

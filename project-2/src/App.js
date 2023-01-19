import { useReducer } from 'react'
import './App.css'

//eslint-disable-next-line
const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload)
      return { ...state, title: action.payload }
    }
    case 'inverter': {
      console.log('chamou inverter')
      const { title } = state
      return { ...state, title: title.split('').reverse().join('') }
    }
  }

  console.log('NENHUMA AÇÃO ENCONTRADA...')
  return { ...state }
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState)
  const { counter, title, body } = state

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
    </div>
  )
}

export default App

import { useContext, useState, createContext } from 'react'
import './App.css'

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
}

const GlobalContext = createContext()

function App() {
  const [contextState, setContextState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  )
}

export default App

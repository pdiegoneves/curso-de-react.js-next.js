import { useContext, useState, createContext } from 'react'
import './App.css'

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
}

const GlobalContext = createContext()

//eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  )
}

//eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { title, counter },
  } = theContext
  return (
    <h1>
      {title} {counter}
    </h1>
  )
}

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { body },
    setContextState,
  } = theContext
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  )
}

function App() {
  const [contextState, setContextState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  )
}

export default App

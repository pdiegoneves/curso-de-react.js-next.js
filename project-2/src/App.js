import React, { useContext } from 'react'
import './App.css'

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
}

const GlobalContext = React.createContext()

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
  return <h1>{theContext.title}</h1>
}

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext)
  return <p>{theContext.body}</p>
}

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Div />
    </GlobalContext.Provider>
  )
}

export default App

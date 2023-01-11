import { createContext, useState } from 'react'

import { globalState } from './data.js'

export const GlobalContext = createContext()

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  )
}

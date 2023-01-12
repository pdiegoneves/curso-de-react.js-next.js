import { Div } from './components/Div'
import { AppContext } from './contexts/AppContext'

import './App.css'

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global-styles.css'
import { CounterContextProvider } from './contexts/CounterContext'
import { Home } from './templates/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
)

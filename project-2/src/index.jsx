import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import { App } from './templates/App'
import { Abc } from './templates/Abc'
import { Menu } from './components/Menu'
import { Page404 } from './templates/Page404'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Menu />
      <Switch>
        <Route path="/abc/:slug/:id" component={Abc} />
        <Route path="/abc/:slug" component={Abc} />
        <Route path="/abc" component={Abc} />
        <Route path="/" component={App} exact />
        <Route path="*" component={Page404} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
)

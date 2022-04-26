import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Esports from './views/esports'
import Store from './views/store'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Esports} path="/esports" />
        <Route exact component={Store} path="/store" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

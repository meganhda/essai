import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import About from './About'
import Blog from './Blog'
import NotFound from './NotFound'
import BlogPost from './BlogPost'
import * as serviceWorker from './serviceWorker'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      <Route path='/blog/:title' component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

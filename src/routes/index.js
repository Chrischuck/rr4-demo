import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
  Home,
  NotHome
} from './utils/asyncRoutes'

const styles = {
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

class Routes extends React.Component {

  render() {
    return (
      <Router>
        <div style={styles}>
          <Switch>
            <Route exact path='/' component={Home}  />
            <Route exact component={NotHome}  />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;
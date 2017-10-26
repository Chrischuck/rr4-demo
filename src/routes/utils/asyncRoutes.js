import React from 'react'
import { injectAsyncReducer } from '../../redux/store'
import store from '../../redux'

import Bundle from './bundle'

import loadHome from '../home/index.bundle.js'
import loadNotHome from '../notHome/index.bundle.js'

import notHomeReducer from '../notHome/reducer'

// no reducer 
export const Home = (props) => (
  <Bundle load={loadHome}>
    { (Component) => <Component {...props}/> }
  </Bundle>
)

export const NotHome = (props) => (
  <Bundle load={loadNotHome}>
    {
      (Component) => {
        injectAsyncReducer(store, 'async', notHomeReducer)
        return <Component {...props}/>
      }
    }
  </Bundle>
)
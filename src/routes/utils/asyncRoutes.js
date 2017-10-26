import React from 'react'
import { injectAsyncReducer } from '../../redux/store'
import { store } from '../../redux'

import Bundle from './bundle'

import loadHome from '../home/index.bundle.js'


export const Home = (props) => (
  <Bundle load={loadHome}>
    {(Component) => <Component {...props}/>}
  </Bundle>
)
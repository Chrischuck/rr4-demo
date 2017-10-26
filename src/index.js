import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
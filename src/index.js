import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducers from './reducers'

let store = createStore(reducers)

let root = document.getElementById('gbuilder-app')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

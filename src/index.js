import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import app from './containers/app'
import reducers from './reducers'

let store = createStore(reducers)

let root = document.getElementById('gbuilder-app')
render(
  <Provider store={store}>
    <app />
  </Provider>,
  root
)

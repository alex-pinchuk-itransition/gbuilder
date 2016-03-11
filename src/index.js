import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cube from './cube'
import App from './containers/app'
import reducers from './reducers'

let store = createStore(reducers);
let root = document.getElementById('gbuilder-app');

cube.init();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)



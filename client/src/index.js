// Basics for react app rendering
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import './style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStroeWithMiddleware = composeEnhancers(applyMiddleware(reduxThunk))(
  createStore
);
// Renders the App element in the document element with the root ID
ReactDom.render(
  // wraps the app in the provider to allow all components to acces the store
  <Provider store={createStroeWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

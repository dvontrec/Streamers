// Basics for react app rendering
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
import './style.css';

const createStroeWithMiddleware = applyMiddleware()(createStore);
// Renders the App element in the document element with the root ID
ReactDom.render(
  // wraps the app in the provider to allow all components to acces the store
  <Provider store={createStroeWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

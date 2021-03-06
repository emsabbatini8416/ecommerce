import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'debounce';
import App from './App';
import { store } from './app/store';
import { saveCart } from './app/browser-storage';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './assets/styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";


store.subscribe(
  debounce(() => {
    saveCart(store.getState().cart);
  }, 800)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { Provider } from 'react-redux'
import { store } from 'store'
import App from './App';
import 'plugins/toastify'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

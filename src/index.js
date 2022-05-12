import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();

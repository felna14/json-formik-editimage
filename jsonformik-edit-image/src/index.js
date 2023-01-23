import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const store = configureStore({ reducer: reducers });
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// const el = document.getElementById('root');
// const root = ReactDOM.createRoot(el);
// const store = configureStore({ reducer: reducers });
// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       {' '}
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

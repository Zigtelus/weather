// modules
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

//redux
import { setupStore } from './store/store';

// components
import App from './App';

// main code
const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore();

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);

import './index.css';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import store from './app/store';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
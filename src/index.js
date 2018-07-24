import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import guitarCollectionReducer from './reducers/guitar-collection-reducer';
import App from './components/App';
import thunkMiddleware from 'redux-thunk';

const store = createStore(guitarCollectionReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

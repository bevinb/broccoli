import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import quotesApp from './middleware/Reducers'
import api from './middleware/API'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

let store = createStoreWithMiddleware(quotesApp);

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
registerServiceWorker();

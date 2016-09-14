import React from 'react';
import ReactDom from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers.jsx';
import App from './component/App.jsx';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
let store = createStoreWithMiddleware(reducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

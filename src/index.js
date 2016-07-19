import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
import App from './containers/app';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter />
    </Provider>
    document.getElementById('root')
);

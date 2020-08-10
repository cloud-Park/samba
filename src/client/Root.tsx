import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import { createStore } from 'redux';
import rootReducer from '../modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

export default Root;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import Reducers from "./reducers/index"
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
const store = createStore(Reducers,applyMiddleware(thunk));


ReactDOM.render(
    <Provider  store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, 
document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import allReducers from "./reducers/";
import { initialLoadSkill } from "./actions/skillAction";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(initialLoadSkill())

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Provider store={store}>
                <App />
            </Provider>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();

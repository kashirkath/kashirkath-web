import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import selectedUserReducer from './store/reducers/selectedUser';
import usersReducer from './store/reducers/users';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({

    selectedReducer:selectedUserReducer,
    userReducer:usersReducer
});

//Writing our own middleware
const logger = (store) =>{

    return (next)=>{

        return (action)=>{

            console.log("[Middleware] Dispatching ",action);
            const result = next(action);
            console.log("[Middleware] next state ",store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();

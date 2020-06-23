import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/index';

let store;
// Include redux dev tool
if(process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__;
    store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
} else {
    store = createStore(rootReducer, applyMiddleware(thunk));
}
// const composeEnhancers=  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer=composeEnhancers(applyMiddleware(thunk))
// const store = createStore(rootReducer, enhancer);

export default store;
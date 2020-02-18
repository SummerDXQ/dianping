import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules/index'

let store
if(process.env.NODE_ENV !=='production' && window.__REDUX_DEVTOOLS_EXTENTION__){
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE__;
    store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
}else{
    store = createStore(rootReducer,applyMiddleware(thunk))
}



export default store;
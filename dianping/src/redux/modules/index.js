import {combineReducers} from 'redux'
// import entities from './entities/index'
import home from './home'
import detail from './detail'
// import app from './app'
import search from './search'
import login from './login'


const rootReducer = combineReducers({
    home,
    detail,
    search,
    login
})

export default rootReducer;
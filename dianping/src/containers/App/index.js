import React,{Component} from 'react';
import ErrorToast from '../../components/ErroeToast/index'
import { getError, actions as appActions} from '../../redux/modules/app';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Home from '../Home/Home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ProductDetail from '../ProductDetail/index'
import Search from "../Search";
import SearchResult from '../SearchResult'
import Login from '../Login/index'
import PrivateRoute from '../PrivateRouter'
import User from '../User'
 
class App extends Component{ 
    render(){
        console.log('APP')
        const {error,appActions} = this.props
        return(
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/search" component={Search} />
                        <Route path="/detail/:id" component={ProductDetail}/>
                        <Route path="/search_result" component={SearchResult}/>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/user" component={User}/>
                    </Switch>
                </Router>
                {error? <ErrorToast msg={error} clearError={appActions.clearError}/>:null}
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return{
        error: getError(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        appAction:bindActionCreators(appActions,dispatch) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
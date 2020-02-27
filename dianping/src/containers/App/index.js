import React,{Component} from 'react';
import ErrorToast from '../../components/ErroeToast/index'
import { getError, actions as appActions} from '../../redux/modules/app';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Home from '../Home/Home'

 
class App extends Component{ 
    render(){
        const {error,appActions} = this.props
        return(
            <div style={{overflow:"hidden"}}>
                <Home></Home>
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
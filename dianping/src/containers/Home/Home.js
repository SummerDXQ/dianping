import React,{Component} from 'react';
import Category from './components/Category'
import Headline from './components/Headline'
import Discount from './components/Discount'
import LikeList from './components/LikeList'
import HomeHeader from './components/HomeHeader'
import Banner from './components/Banner'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {actions,getLikes,getDiscounts,getPageCountOfLikes} from '../../redux/modules/home'

class Home extends Component{
    componentDidMount(){
        console.log('在componentDidMount初始化')
        this.props.homeActions.loadDiscounts();
        this.props.homeActions.loadLikes();
    }

    fetchMoreLikes = () =>{
        this.props.homeActions.loadLikes()
    }

    render(){
        // console.log('-------------home render-----------------')
        const {likes,discount,pageCount} = this.props
        return(
            <div>
                <HomeHeader/>
                <Banner/>
                <Category/>
                <Headline/>
                {discount?<Discount data={discount}/>:null}
                <LikeList data={likes} pageCount={pageCount} fetchData={this.fetchMoreLikes}/>
            </div>
        )
    }
}


const mapStateToProps = (state,props) =>{
    return {
        likes:getLikes(state),
        discount:getDiscounts(state),
        pageCount:getPageCountOfLikes(state)
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        homeActions:bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
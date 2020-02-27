import React,{Component} from 'react';
import Category from './components/Category'
import Headline from './components/Headline'
import Discount from './components/Discount'
import LikeList from './components/LikeList'
import HomeHeader from './components/HomeHeader'
import Banner from './components/Banner'

export default class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader/>
                <Banner/>
                <Category/>
                <Headline/>
                <Discount/>
                <LikeList/>
            </div>
        )
    }
}
import React,{Component} from 'react'
import './style.css'

class Banner extends Component{
    render(){
        return(
            <header className="banner">
                <div className="banner__title">
                    <span className="banner__logo"></span>
                    <span className="banner__text">Food and Amusement</span>
                </div>
                <div className="banner__btns">
                    <a className="banner__btn" href='https://evt.dianping.com/synthesislink/6702.html'>Open App</a>
                    <a className='banner__btn banner__btn--bg' href='https://m.dianping.com/download/redirect?id=11186'>Download APP</a>
                    <a></a>
                </div>
            </header>
        )
    }
}

export default Banner;
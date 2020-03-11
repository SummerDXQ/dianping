import React,{Component} from 'react'
import './style.css'

export default class ProductOverview extends Component{
    render(){
        return(
            <div className="productOverview">
                <div className="productOverview__header">
                    <div className="productOverview__imgContainer">
                        <img alt='' className="productOverview__img" src="https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg@450w_280h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20"/>
                    </div>
                    <div className="productOverview_baseInfo">
                        <div className="productOverview_title">ETA.37mins(429m)</div>
                        <div className="productOverview_content">6034+Sold/M</div>
                    </div>
                </div>
                <div className="productOverview__purchase">
                    <span className="productOverview__symbol">$</span>
                    <span className="productOverview__price">19.9</span>
                    <span className="productOverview__price--old">$49.9</span>
                    <a className="productOverview__btn">Buy</a>
                </div>
                <ul className="productOverview__remark">
                    <li className="productOverview__remarkItem">
                        <i className='productOverview__sign1'></i>
                        <span className='productOverview_desc'>Refundable</span>
                    </li>
                    <li>
                        <i className='productOverview__sign2'></i>
                        <span className='productOverview_desc'>Refund Automatically</span>
                    </li>
                </ul>
            </div>
        )
    }
}
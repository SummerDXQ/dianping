import React,{Component} from 'react'
import './style.css'

export default class ProductOverview extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className="productOverview">
                <div className="productOverview__header">
                    <div className="productOverview__imgContainer">
                        <img alt='' className="productOverview__img" src={data.picture}/>
                    </div>
                    <div className="productOverview__baseInfo">
                        <div className="productOverview__title">{data.shop}</div>
                        <div className="productOverview__content">{data.description}</div>
                    </div>
                </div>
                <div className="productOverview__purchase">
                    <span className="productOverview__symbol">$</span>
                    <span className="productOverview__price">{data.currentPrice}</span>
                    <span className="productOverview__price--old">${data.oldPrice}</span>
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
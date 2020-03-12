import React,{Component} from 'react'
import ProductOverview from './components/ProductOverview'
import ShopInfo from "./components/ShopInfo"
import Detail from "./components/Detail"
import Remark from "./components/Remark"
import BuyButton from "./components/BuyButton"
import Header from "../../components/Header"
import {actions,getProduct} from '../../redux/modules/detail'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ProductDetail extends Component{
    handleBack=()=>{
        this.props.history.push('/')
    }
    componentDidMount=()=>{
        const productId = this.props.match.params.id;
        this.props.detailActions.loadProductDetail(productId)
        
    }
    render(){
        const {product} = this.props
        return(
            <div>
                <Header title="Group Purchase" onBack={this.handleBack} grey={true} />
                {product?<ProductOverview data={product}/>:null}
                {product?<ShopInfo data={product}/>:null}
                {product?<Detail data={product}/>:null}
                {product?<Remark data={product}/>:null}
                <BuyButton />
            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return{
        product:getProduct(state),
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        detailActions:bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
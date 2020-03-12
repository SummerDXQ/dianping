import {reqProductDetail} from '../../utils/index'
import {combineReducers} from 'redux'
// state
const initialState = {
    product:{
        isFetching:false,
        id:null
    },
    relatedShop:{
        isFetching:false,
        id:null
    }
}

// action types
export const types = {
    FETCH_PRODUCT_DETAIL_REQUEST:'DETAIL/FETCH_PRODUCT_DETAIL_REQUEST',
    FETCH_PRODUCT_DETAIL_SUCCESS:'DETAIL/FETCH_PRODUCT_DETAIL_SUCCESS',
    FETCH_SHOP_DETAIL_REQUEST:'DETAIL/FETCH_SHOP_DETAIL_REQUEST',
    FETCH_SHOP_DETAIL_SUCCESS:'DETAIL/FETCH_SHOP_DETAIL_SUCCESS'
}

// action creator
export const actions = {
    loadProductDetail: id=>{
        return async (dispatch,getState)=>{
            dispatch(fetchProductDetailRequest())
            const res = await reqProductDetail(id)
            dispatch(fetchProductDetailSuccess(res.data))
            
        }
    }
}

const fetchProductDetailRequest = () =>({
    type:types.FETCH_PRODUCT_DETAIL_REQUEST
})

const fetchProductDetailSuccess = (value) =>({
    type:types.FETCH_PRODUCT_DETAIL_SUCCESS,
    value
})

// reducer
const product = (state=initialState.product,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCT_DETAIL_REQUEST:
            return {...state,isFetching:true}
        case types.FETCH_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                isFetching:false,
                id:action.value,
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    product
})

// selector
export const getProduct = (state)=>{
    return state.detail.product.id
}

export default reducer;
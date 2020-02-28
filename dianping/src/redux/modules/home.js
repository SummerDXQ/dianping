import {get} from '../../utils/request'
import url from '../../utils/url'
import {combineReducers} from 'redux'

// consts
export const params = {
    PATH_LIKES:'likes',
    PATH_DISCOUNTS:'discounts',
    PAGE_SIZE_LIKES:5,
    PAGE_SIZE_DISCOUNTS:3
}

// action type
export const types = {
    FETCH_LIKES_REQUEST:'HOME/FETCH_LIKES_REQUEST',
    FETCH_LIKES_SUCCESS:'HOME/FETCH_LIKES_SUCCESS',
    FETCH_LIKES_FAILURE:'HOME/FETCH_LIKES_FAILURE',
    FETCH_DISCOUNTS_REQUEST:'HOME/FETCH_LIKES_REQUEST',
    FETCH_DISCOUNTS_SUCCESS:'HOME/FETCH_LIKES_SUCCESS',
    FETCH_DISCOUNTS_FAILURE:'HOME/FETCH_LIKES_FAILURE',
}

// initial state
const initialState = {
    likes:{
        isFetching:false,
        pageCount:0,
        ids:[]
    },
    discounts:{
        isFetching:false,
        ids:[]
    }
}

// action creator
export const actions={
    loadLikes:()=>{
        return (dispatch,getState)=>{
            dispatch(fetchLikesRequest());
            // console.log('likes的值')
            // console.log(getState())
            const {pageCount} = getState().home.likes;
            const rowIndex = pageCount*params.PAGE_SIZE_LIKES;
            console.log('请求列表数据')
            console.log(url.getProductList(params.PATH_LIKES,rowIndex,params.PAGE_SIZE_LIKES))
            return get(url.getProductList('likes',rowIndex,params.PAGE_SIZE_LIKES)).then(
                value=>{
                    console.log('likes返回值');
                    console.log('返回值'+value);
                    dispatch(fetchLikesSuccess(value));
                },
                reason=>{
                    dispatch(fetchLikesFailure(reason))
                }
            )
        }
    },
    loadDiscounts:()=>{
        return(dispatch,getState)=>{
            dispatch(fetchDiscountsRequest())
            // console.log(params.PATH_DISCOUNTS)
            // console.log(params.PAGE_SIZE_DISCOUNTS)
            // console.log(url.getDiscount())
            return get(url.getDiscount()).then(
                value=>{
                    console.log('discounts返回值')
                    console.dir(value)
                    dispatch(fetchDiscountsSuccess(value))
                },
                reason=>{
                    dispatch(fetchDiscountsFailure(reason))
                }
            )
        }
    }
}

const fetchLikesRequest = () => ({
    type:types.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (value) => ({
    type:types.FETCH_LIKES_SUCCESS,
    value 
})

const fetchLikesFailure = (reason) => ({
    type:types.FETCH_LIKES_FAILURE,
    reason
})

const fetchDiscountsRequest = () => ({
    type:types.FETCH_DISCOUNTS_REQUEST
})

const fetchDiscountsSuccess = (value) => ({
    type:types.FETCH_DISCOUNTS_SUCCESS,
    value 
})

const fetchDiscountsFailure = (reason) => ({
    type:types.FETCH_DISCOUNTS_FAILURE,
    reason
})

// reducer
const likes = (state=initialState.likes,action) =>{
    switch(action.type){
        case types.FETCH_LIKES_REQUEST:
            return {
                ...state,
                isFetching:true
            }
        case types.FETCH_LIKES_SUCCESS:
            return {
                ...state,
                isFetching:false,
                pageCount:state.pageCount+1,
                ids:state.ids.concat(action.value) 
            }
        case types.FETCH_LIKES_FAILURE:
            return {...state,isFetching:false}
        default:
            return state        
}}

const discounts = (state=initialState.discounts,action) =>{
    switch(action.type){
        case types.FETCH_DISCOUNTS_REQUEST:
            return {
                ...state,
                isFetching:true
            }
        case types.FETCH_DISCOUNTS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                ids:state.ids.concat(action.value) 
            }
        case types.FETCH_DISCOUNTS_FAILURE:
            return {...state,isFetching:false}
        default:
            return state        
}}

const reducer = combineReducers({
    discounts,
    likes
})

export default reducer;

// selectors
export const getLikes = state =>{
    console.log('likes的数据')
    console.log(state.home.likes.ids)
    return state.home.likes.ids
}

export const getDiscounts = state =>{
    console.log('discounts的数据')
    console.log(state.home.discounts.ids)
    return state.home.discounts.ids
}

export const getPageCountOfLikes = state =>{
    
    return state.home.likes.pageCount
}
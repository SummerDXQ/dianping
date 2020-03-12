import {combineReducers} from 'redux'
import {reqDiscounts,reqLikes} from '../../utils/index'

// action type
export const types = {
    FETCH_LIKES_REQUEST:'HOME/FETCH_LIKES_REQUEST',
    FETCH_LIKES_SUCCESS:'HOME/FETCH_LIKES_SUCCESS',
    FETCH_LIKES_FAILURE:'HOME/FETCH_LIKES_FAILURE',
    FETCH_DISCOUNTS_REQUEST:'HOME/FETCH_DISCOUNTS_REQUEST',
    FETCH_DISCOUNTS_SUCCESS:'HOME/FETCH_DISCOUNTS_SUCCESS',
    FETCH_DISCOUNTS_FAILURE:'HOME/FETCH_DISCOUNTS_FAILURE',
}

// initial state
const initialState = {
    likes:{
        isFetching:false,
        pageCount:0,
        products:[]
    },
    discounts:{
        isFetching:false,
        stores:[]
    }
}

// action creator
export const actions={
    loadLikes:()=>{
        initialState.likes.pageCount++;
        var pageNo = initialState.likes.pageCount
        return async (dispatch,getState)=>{
            dispatch(fetchLikesRequest());
            const res = await reqLikes(pageNo)
            dispatch(fetchLikesSuccess(res.data));
        }
    },
    loadDiscounts:()=>{
        return async (dispatch,getState)=>{
            dispatch(fetchDiscountsRequest())
            const res = await reqDiscounts()
            dispatch(fetchDiscountsSuccess(res.data));
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

// const fetchLikesFailure = (reason) => ({
//     type:types.FETCH_LIKES_FAILURE,
//     reason
// })

const fetchDiscountsRequest = () => ({
    type:types.FETCH_DISCOUNTS_REQUEST
})

const fetchDiscountsSuccess = (value) => ({
    type:types.FETCH_DISCOUNTS_SUCCESS,
    value 
})

// const fetchDiscountsFailure = (reason) => ({
//     type:types.FETCH_DISCOUNTS_FAILURE,
//     reason
// })

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
                products:action.value
            }
        case types.FETCH_LIKES_FAILURE:
            return {
                ...state,
                isFetching:false}
        default:
            return state        
}}
const discounts = (state=initialState.discounts,action) =>{
    switch(action.type){
        case types.FETCH_DISCOUNTS_REQUEST:
            return {
                ...state.discounts,
                isFetching:true
            }
        case types.FETCH_DISCOUNTS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                stores:action.value
            }
        case types.FETCH_DISCOUNTS_FAILURE:
            return {
                ...state,
                isFetching:false
            }  
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
    return state.home.likes.products
}

export const getDiscounts = state =>{
    return state.home.discounts.stores
}

export const getPageCountOfLikes = state =>{
    return state.home.likes.pageCount
}
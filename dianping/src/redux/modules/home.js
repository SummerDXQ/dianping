import {get} from '../../utils/request'
import url from '../../utils/url'

export const types = {
    FETCH_LIKES_REQUEST:'HOME/FETCH_LIKES_REQUEST',
    FETCH_LIKES_SUCCESS:'HOME/FETCH_LIKES_SUCCESS',
    FETCH_LIKES_FAILURE:'HOME/FETCH_LIKES_FAILURE',
}



export const actions={
    loadLikes:()=>{
        return (dispatch,getState)=>{
            dispatch(fetchLikesRequest());
            return get(url.getProductList(0,10)).then(
                data=>{
                    dispatch(fetchLikesSuccess(data))
                    // dispatch()
                },
                error=>{
                    dispatch(fetchLikesFailure(error))
                }
            )

        }

    }
}

const fetchLikesRequest = () => ({
    types:types.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (data) => ({
    types:types.FETCH_LIKES_SUCCESS,
    data 
})

const fetchLikesFailure = (err) => ({
    types:types.FETCH_LIKES_FAILURE,
    err
})

const reducer = (state={},action)=>{
    switch(action.type){
        case types.FETCH_LIKES_REQUEST:
            // 
        case types.FETCH_LIKES_SUCCESS:
            // 
        case types.FETCH_LIKES_FAILURE:
            // 
        default:
            return state       
    }
}

export default reducer;
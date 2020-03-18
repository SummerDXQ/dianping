import {combineReducers} from 'redux'
import {reqPolularKeywords, reqRelatedKeywords,reqRelatedShops} from '../../utils/index'

const initialState ={
    inputText:"",
    popularKeywords:{
        isFetching:false,
        ids:[]
    },
    relatedKeywords:{},
    historyKeywords:[],
    searchShopsByKeyword:{}
}

export const types = {
    FETCH_POPULAR_KEYWORDS_REQUEST:'SEARCH/FETCH_POPULAR_KEYWORDS_REQUEST',
    FETCH_POPULAR_KEYWORDS_SUCCESS:'SEARCH/FETCH_POPULAR_KEYWORDS_SUCCESS',
    FETCH_RELATED_KEYWORDS_REQUEST:'SEARCH/FETCH_RELATED_KEYWORDS_REQUEST',
    FETCH_RELATED_KEYWORDS_SUCCESS:'SEARCH/FETCH_RELATED_KEYWORDS_SUCCESS',
    SET_INPUT_TEXT:'SEARCH/SET_INPUT_TEXT',
    CLEAR_INPUT_TEXT:'SEARCH/CLEAR_INPUT_TEXT',
    ADD_HISTORY_KEYWORDS:'SEARCH/ADD_HISTORY_KEYWORDS',
    CLEAR_HISTORY_KEYWORDS:'SEARCH/CLEAR_HISTORY_KEYWORDS',
    FETCH_SHOPS_REQUEST:'SEARCH/FETCH_SHOPS_REQUEST',
    FETCH_SHOPS_SUCCESS:'SEARCH/FETCH_SHOPS_SUCCESS',
}

// action creator
export const actions ={
    loadPopularKeywords:()=>{
        return async (dispatch,getState)=>{
            const {ids} = getState().search.popularKeywords;
            console.log(ids)
            if(ids.length>0){
                return null;
            }
            dispatch(fetchPopularKeywordsRequest());
            const res = await reqPolularKeywords();
            dispatch(fetchPopularKeywordsSuccess(res.data))

        }
    },
    loadRelatedKeywords:(text)=>{
        return async (dispatch,getState)=>{
            const {relatedKeywords} = getState().search;
            // if(relatedKeywords){
            //     return null
            // }
            dispatch(fetchRelatedKeywordsRequest());
            const res = await reqRelatedKeywords(text);
            dispatch(fetchRelatedKeywordsSuccess(res.data,text))
        }
    },
    loadRelatedShops:(keyword)=>{
        return async (dispatch,getState)=>{
            const {searchShopsByKeyword} = getState()
            // if(searchShopsByKeyword[keyword]){
            //     return null
            // }
            dispatch(fetchRelatedShopsRequest())
            const res = await reqRelatedShops(keyword)
            console.log(res.data)
            dispatch(fetchRelatedShopsSuccess(res.data,keyword))
        }
    },
    setInputText:(value)=>({
        type:types.SET_INPUT_TEXT,
        value
    }),
    clearInputText:()=>({
        type:types.CLEAR_INPUT_TEXT
    }),
    addHistoryKeyword:(value)=>({
        type:types.ADD_HISTORY_KEYWORDS,
        value
    }),
    clearHistoryKeywords:()=>({
        type:types.CLEAR_HISTORY_KEYWORDS
    })
}

const fetchPopularKeywordsRequest = () =>({
    type:types.FETCH_POPULAR_KEYWORDS_REQUEST
})

const fetchPopularKeywordsSuccess = (value) =>({
    type:types.FETCH_POPULAR_KEYWORDS_SUCCESS,
    value
})

const fetchRelatedKeywordsRequest = () =>({
    type:types.FETCH_RELATED_KEYWORDS_REQUEST
})

const fetchRelatedKeywordsSuccess = (value,text) =>({
    type:types.FETCH_RELATED_KEYWORDS_SUCCESS,
    value,
    text
})
const fetchRelatedShopsRequest = () =>({
    type:types.FETCH_SHOPS_REQUEST
})

const fetchRelatedShopsSuccess = (value,keyword) =>({
    type:types.FETCH_SHOPS_SUCCESS,
    value,
    keyword
})

// reducer
const popularKeywords = (state=initialState.popularKeywords,action) =>{
    switch(action.type){
        case types.FETCH_POPULAR_KEYWORDS_REQUEST:
            return {
                ...state,
                isFetching:true
            }
        case types.FETCH_POPULAR_KEYWORDS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                ids:state.ids.concat(action.value)
            }
        default:
            return state
    }
}

const relatedKeywords = (state=initialState.relatedKeywords,action)=>{
    switch(action.type){
        case types.FETCH_RELATED_KEYWORDS_REQUEST:
        case types.FETCH_RELATED_KEYWORDS_SUCCESS:
            return {
                ...state,
                [action.text]:relatedKeywordsByText(state[action.text], action)
            }
        default:
            return state
    }
}

const relatedKeywordsByText = (state={isFetching:false,ids:[]},action)=>{
    switch(action.type){
        case types.FETCH_RELATED_KEYWORDS_REQUEST:
            return {
                ...state,
                isFetching:true
            }
        case types.FETCH_RELATED_KEYWORDS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                ids:action.value
            }
        default:
            return state
    }
}

const searchShopsByKeyword = (state=initialState.searchShopsByKeyword,action)=>{
    switch(action.type){
        case types.FETCH_SHOPS_REQUEST:
        case types.FETCH_SHOPS_SUCCESS:
            return {
                ...state,
                [action.keyword]:action.value
            }
        default:
            return state
    }
}




const inputText = (state=initialState.inputText,action) =>{
    switch(action.type){
        case types.SET_INPUT_TEXT:
            return action.value
        case types.CLEAR_INPUT_TEXT:
            return ""
        default:
            return state
    }
}

const historyKeywords = (state=initialState.historyKeywords,action) =>{
    switch(action.type){
        case types.ADD_HISTORY_KEYWORDS:
            const data = state.filter(item=>item!==action.value)
            return [action.value,...data]
        case types.CLEAR_HISTORY_KEYWORDS:
            return [];
        default:
            return state
    }
}
const reducer = combineReducers({
    popularKeywords,
    relatedKeywords,
    inputText,
    historyKeywords,
    searchShopsByKeyword
})

export default reducer;

// selector
export const getPopularKeywords = (state) =>{
    return state.search.popularKeywords.ids
}

export const getRelatedKeywords = (state) =>{
    const text = state.search.inputText;
    if(!text || text.trim().length===0){
        return []
    }
    const relatedKeywords = state.search.relatedKeywords[text];
    if(!relatedKeywords){
        return []
    } 
    return relatedKeywords.ids
}

export const getInputText = (state) =>{
    return state.search.inputText
}

export const getHistoryKeywords = (state) =>{
    return state.search.historyKeywords
}

export const getSearchShops=state=>{
    const keyword=state.search.historyKeywords[0]
    if(!keyword){
        return []
    };
    const shops = state.search.searchShopsByKeyword[keyword]
    return shops
}

export const getCurrentKeyword = state =>{
    const keyword=state.search.historyKeywords[0];
    if(!keyword){
        return ""
    }
    return keyword
}
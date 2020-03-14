import {combineReducers} from 'redux'
import {reqPolularKeywords, reqRelatedKeywords} from '../../utils/index'

const initialState ={
    inputText:"",
    popularKeywords:{
        isFetching:false,
        ids:[]
    },
    relatedKeywords:{},
    historyKeywords:[]
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
}

// action creator
export const actions ={
    loadPopularKeywords:()=>{
        console.log('---------loadPopularKeywords-------------')
        return async (dispatch,getState)=>{
            const {ids} = getState().search.popularKeywords;
            console.log(ids)
            if(ids.length>0){
                return null;
            }
            dispatch(fetchPopularKeywordsRequest());
            const res = await reqPolularKeywords();
            // console.log(res.data)
            dispatch(fetchPopularKeywordsSuccess(res.data))

        }
    },
    loadRelatedKeywords:(text)=>{
        return async (dispatch,getState)=>{
            console.log('---------loadRelatedKeywords-----------')
            const {relatedKeywords} = getState().search;
            console.log(relatedKeywords)
            // if(relatedKeywords){
            //     return null
            // }
            dispatch(fetchRelatedKeywordsRequest());
            const res = await reqRelatedKeywords(text);
            console.log('返回值')
            console.log(text)
            dispatch(fetchRelatedKeywordsSuccess(res.data,text))
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
            console.log('initialState.relatedKeywords')
            console.log(state)
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

const inputText = (state=initialState.inputText,action) =>{
    switch(action.type){
        case types.SET_INPUT_TEXT:
            return action.value
        case types.CLEAR_INPUT_TEXT:
            console.log("返回空")
            return ""
        default:
            return state
    }
}

const historyKeywords = (state=initialState.historyKeywords,action) =>{
    switch(action.type){
        case types.ADD_HISTORY_KEYWORDS:
            console.log('----------historyKeywords-----------')
            console.log(action.value)
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
    historyKeywords
})

export default reducer;
// selector
export const getPopularKeywords = (state) =>{
    return state.search.popularKeywords.ids
    // .map(id=>{
    //     return getKeywordById(state,id)
    // })
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
    // .map(id=>{
    //     return getKeywordById(state,id)
    // })
}

export const getInputText = (state) =>{
    return state.search.inputText
}

export const getHistoryKeywords = (state) =>{
    return state.search.historyKeywords
    // .map(id=>{
    //     return getKeywordById(state,id)
    // })
}
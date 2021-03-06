const initialState = {
    error:null
}

// action type
export const types ={
    CLEAR_ERROR:'APP/CLEAR_ERROR'
}

// action creator
export const actions = {
    clearError:()=>({
        type:types.CLEAR_ERROR
    })
}
const reducer = (state = initialState,action)=>{
    const {type,error} = action
    if(type === types.CLEAR_ERROR){
        return {...state,error:null}
    }else if(error){
        return {...state,error:error}
    }
    return state
}

export default reducer;

// selector
export const getError = (state) => state.error
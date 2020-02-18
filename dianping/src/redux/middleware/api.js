export const FETCH_DATA = 'FETCH DATA'
export default store => next => action =>{
    const callAPI = action[FETCH_DATA]
    if(typeof callAPI === 'undefined'){
        return next(action)
    }

    const {endpoint,schema,types} = callAPI
    if(typeof endpoint !== 'string'){
        throw  new Error('endpoint must be string')
    }
    if(!schema){
        throw  new Error('must have a schema')
    }
    if(!Array.isArray(types) && types.length !==3){
        throw new Error('need a array and length must be three')
    }
    if(!types.every(type=> typeof type === 'string')){
        throw  new Error('action type must be string')
    }

    return fetchData
}
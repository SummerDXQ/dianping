const headers = new Headers({
    'Accept':'application/json',
    'Content-Type':'application/json'
})

function get(url){
    return fetch(url,{
        method:'GET',
        headers:headers
    }).then(response=>{
        handleResponse(url,response)
    }).catch(err=>{
        console.error(`Request Failed. URL = ${url}. Message=${err}`)
        //haven't reach server
        return Promise.reject({erro:{message:'Request Failed'}})
    })
}

function post(url,data){
    return fetch(url,{
        method:'POST',
        headers:headers,
        body:data
    }).then(response=>{
        handleResponse(url,response)
    }).catch(err=>{
        console.error(`Request Failed. URL = ${url}. Message=${err}`)
        // 这里还没到服务器端
        return Promise.reject({erro:{message:'Request Failed'}})
    })
}

function handleResponse(url,response){
    if(response.status===200){
        return response.json();
    }else{
        console.error(`Request Failed. URL = ${url}`)
        return Promise.reject({erro:{message:'Request Failed due to server error'}})
    }
}

export {get,post}
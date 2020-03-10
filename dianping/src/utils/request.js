import axios from 'axios'

export default function ajax(url,data={},type="GET"){
    if(type==="GET"){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}


ajax('/mock/products/discounts.json').then()
// const headers = new Headers({
//     'Accept':'application/json',
//     'Content-Type':'application/json'
// })

// function get(url){
//     // console.log('传进来的URL为'+url)
//     return fetch(url,{
//         method:'GET',
//         headers:headers
//     }).then(response=>{
//         // console.log('结果是'+response)
//         // console.dir(response)
//         // console.log(response.json())
//         handleResponse(url,response)
//         // return response.json()
//         // return Promise.resolve(response.json()) 
//     }).catch(err=>{
//         console.error(`Request Failed. URL = ${url}. Message=${err}`)
//         //haven't reach server
//         return Promise.reject({erro:{message:'Request Failed'}})
//     })
// }

// function post(url,data){
//     return fetch(url,{
//         method:'POST',
//         headers:headers,
//         body:data
//     }).then(response=>{
//         handleResponse(url,response)
//     }).catch(err=>{
//         console.error(`Request Failed. URL = ${url}. Message=${err}`)
//         // 这里还没到服务器端
//         return Promise.reject({erro:{message:'Request Failed'}})
//     })
// }

// function handleResponse(url,response){
//     if(response.status===200){
//         return response.json();
//     }else{
//         console.error(`Request Failed. URL = ${url}`)
//         return Promise.reject({erro:{message:'Request Failed due to server error'}})
//     }
// }

// export {get,post}
import axios from 'axios'

export default function ajax(url,data={},type='GET'){
    // 统一处理异常(在外层包一个promise对象，而不是直接axios的promise，且请求失败时不reject，而是显示错误提示)
    return new Promise((resolve,reject)=>{
        let promise;
        // 1.执行异步ajax请求
        if(type=='GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        // 2.如果成功了，调用resolve(value)
        promise.then(response=>{
            resolve(response)
        })
        // 3.如果失败了，不调用reject(reason)，不然会进入catch，所以只提示异常信息
        .catch(error=>{
            alert(error)
        })
    })
    
}
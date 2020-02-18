import React,{Component} from 'react'
import './style.css'

export default class ErrorToast extends Component{
    componentDidMount(){
        this.timmer = setTimeout(()=>{
            this.props.clearError();
        },3000)
    }

    render(){
        const {msg} = this.props
        return(
            <div className='errorToast'>
                <div className='errorToast_text'>
                    {msg}
                </div>
            </div>
        )
    }

    componentWillUnmount(){
        if(this.timmer){
            clearTimeout(this.timmer)
        }
    }
}
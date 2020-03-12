import React,{Component} from 'react'
import './style.css'
import LikeItem from '../LikeItem'
import Loading from '../../../../components/Loading'

class LikeList extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.removeListener = false;
    }

    componentDidMount(){
        document.addEventListener("scroll",this.handleScroll);
    }

    componentDidUpdate(){
        if(this.props.pageCount >=3 && !this.removeListener){
            document.removeEventListener("scroll",this.handleScroll)
            this.removeListener = true;
        }
    }

    componentWillUnmount(){
        if(!this.removeListener){
            document.removeEventListener("scroll",this.handleScroll)
        }
    }

    handleScroll = ()=>{
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        const screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if(scrollTop+screenHeight+55>=documentHeight){
            this.props.fetchData();
        }
    }
    render(){
      const {data,pageCount} = this.props;
        return(
            <div ref={this.myRef} className="likeList">
                <div className="likeList__header">You May Like</div>
                <div className="likeList__list">
                    {
                        data.map((item,index)=>{
                            return <LikeItem key={index} data={item}/>
                        })
                    }
                </div>
                {
                    pageCount < 3 ? (<Loading/>):(<a className="likeList__viewAll">Search More</a>)
                }
            </div>
        )
    }
}

export default LikeList;
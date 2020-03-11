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
        console.log('LikeList componentDidMount')
        document.addEventListener("scroll",this.handleScroll);
        // this.props.fetchData();
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
        console.log('----------handleScroll-----------')
        // 浏览器卷去部分高度
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 浏览器窗口高度 
        const screenHeight = document.documentElement.clientHeight;
        const likeListTop = this.myRef.current.offsetTop;
        const likeListHeight = this.myRef.current.offsetHeight;
        console.log('浏览器窗口高度'+screenHeight)
        console.log('like距离顶部的高度'+likeListTop) 
        console.log('like的高度'+likeListHeight)
        console.log('滚进去的高度'+scrollTop)
        console.log('底部的距离',likeListHeight + likeListTop - screenHeight)
        if(scrollTop >= likeListHeight + likeListTop - screenHeight){
            console.log('load数据')
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
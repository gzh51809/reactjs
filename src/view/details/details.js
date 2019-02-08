import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Tag, Avatar} from "antd";
import {Link} from "react-router-dom";
import Deta from "./detailslist";

const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};

 class Details extends Component{

    constructor(arg){
        super(arg);
        console.log(this.props);
        let id = this.props.match.params.id;
        this.state={
            id,
            data: this.props.data.data,
            loading: this.props.loading
        }
        this.updata(id);
        console.log("id:",id);

    };
    updata(id){
        this.props.dispatch(function(dispatch){
            dispatch({
                type:"DETAILS_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/topic/'+id)
            .then(function(res){
                dispatch({
                    type:"DETAILS_SUCC",
                    data:res
                });
            })
            .catch(function (error) {
                dispatch({
                    type:"DETAILS_ERROR",
                    data: error
                });
            })
        })
    }
    render(){
        const {data,loading} = this.state;
        console.log(this.state);
        const {reply_count,replies} = data;
        return (<div>
            <div className="detailstag">
                 <h2>{data.title}</h2>
                <div style={{display:"flex",alignItems:"center"}} >
                    <Tag
                        color={
                            data.top ?
                                'magenta' :
                                data.good ?
                                    'green' :
                                    'geekblue'
                        }
                    >
                        { data.top ? '置顶' : data.good ? '精华' : tabSchema[data.tab] ? tabSchema[data.tab] : '分享' }
                    </Tag>
                    <Avatar src={data.author.avatar_url} style={{margin:"0 5px"}} size="small" className="detailsimg"/>
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                    <span style={{marginLeft:"5px"}}>发表于：{data.create_at.split("T")[0]}</span>
                </div>
                </div>
                <div dangerouslySetInnerHTML={
                    {__html:data.content}
                }></div>

                <Deta
                loading = {loading}
                reply_count = {reply_count}
                replies = {replies}
                />
        </div>
            
        );
    }
}

export default connect(state=>(state.details))(Details);
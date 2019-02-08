import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import { Avatar, Row, Col} from "antd";
import Userlist from "./userlist";
 class User extends Component{

    constructor(arg){
        super(arg);
        

        let {loading,data} = this.props; 
        let loginname =this.props.match.params.id;
        this.state = {
            loading: loading,
            loginname,
            avatar: data.data.avatar_url,
            score: data.data.score,
            create_at: data.data.create_at,
            recent_topics: data.data.recent_topics,
            recent_replies: data.data.recent_replies
        };
        this.updata(loginname);
        console.log('loginname:',loginname);
        console.log(this.props);

    };

    componentWillReceiveProps(nextProps){
        let loginname = nextProps.match.params.id;
        if(loginname !== this.state.loginname){
            this.setState({
                loginname
            });
            this.updata(loginname);
            return false;
        }
        let {loading,data} = nextProps;
        this.setState({
            loading: loading,
            avatar: data.data.avatar_url,
            score: data.data.score,
            create_at: data.data.create_at,
            recent_topics: data.data.recent_topics,
            recent_replies: data.data.recent_replies
        });
    }
   
    updata(loginname){
        this.props.dispatch(function(dispatch){
            dispatch({
                type:"USER_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/user/'+loginname)
            .then(function(res){
                dispatch({
                    type:"USER_SUCC",
                    data:res
                });
            })
            .catch(function (error) {
                dispatch({
                    type:"USER_ERROR",
                    data: error
                });
            })
        })
    }
    render(){
        let {loginname,avatar,score,create_at,recent_replies,loading,recent_topics} = this.state;
        
        return (<div >
            <div className="touxiang">
            <Avatar
             src={avatar}
             className = "userAvatar"
         />
         <Row className="userInfo">
             <Col>
                 {<p>用户名:
                 <span>
                    {loginname}
                    </span>  
                    </p>}
             </Col>
             <Col>
                 {<p>积分:
                    <span>
                    {score}
                    </span>
                    </p>}
             </Col>
             <Col>
                 {<p>注册时间:
                 <span>
                    {create_at.split("T")[0]}
                    </span> 
                    </p>}
             </Col>
         </Row>
         </div>
         <Userlist
                loading = {loading}
                title = "最近创建的话题"
                data = {recent_topics}
            />
            <Userlist
                loading = {loading}
                title = "最近回复的话题"
                data = {recent_replies}
            />
     </div>
            
        );
    }
}

export default connect(state=>(state.user))(User);
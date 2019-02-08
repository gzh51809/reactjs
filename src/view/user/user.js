import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
 class User extends Component{

    constructor(arg){
        super(arg);
        console.log(this.props);

    };
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
        return (
            <h2>user</h2>
        );
    }
}

export default connect(state=>(state.user))(User);
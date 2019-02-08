import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
 class Details extends Component{

    constructor(arg){
        super(arg);
        console.log(this.props);

    };
    updata(id){
        this.props.dispatch(function(dispatch){
            dispatch({
                type:"DETAILS_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/user/'+id)
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
        return (
            <h2>DETAILS</h2>
        );
    }
}

export default connect(state=>(state.details))(Details);
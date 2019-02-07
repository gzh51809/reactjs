import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import sList from "../view/index/list";
export default class RouterList extends Component {
    render(){
        return (
            <Switch>
                <Route path="/index" exact render={()=>(<Redirect to="/index/all" />)}/>
                <Route path="/index/all" component={sList}/>
                <Route path="/index/ask" component={sList}/>
                <Route path="/index/share" component={sList}/>
                <Route path="/index/job" component={sList}/>
                <Route path="/index/dev" component={sList}/>
                <Route path="/index/good" component={sList}/>
            </Switch>
        );
    }
}


import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import List from "../view/index/list";
export default class RouterList extends Component {
    render(){
        return (
            <Switch>
                <Route path="/index" exact render={()=>(<Redirect to="/index/all" />)}/>
                <Route path="/index/all" component={List}/>
                <Route path="/index/ask" component={List}/>
                <Route path="/index/share" component={List}/>
                <Route path="/index/job" component={List}/>
                <Route path="/index/dev" component={List}/>
                <Route path="/index/good" component={List}/>
            </Switch>
        );
    }
}


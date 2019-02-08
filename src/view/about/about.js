import React,{Component} from "react";
import data from "./data";
import Templatea from "../templatea/templatea";
export default class About extends Component{
    render(){
        return (
            <Templatea
            data={data}
            />
        );
    }
}
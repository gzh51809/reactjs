import React,{Component} from "react";
import data from "./data";
import Temlatea from "../templatea/templatea";
export default class Book extends Component{
    render(){
        return (
           <Temlatea 
           data={data}
           />
        );
    }
}
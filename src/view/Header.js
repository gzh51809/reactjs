
import React,{Component} from "react";
import {Layout,Col,Icon} from 'antd';
import {NavLink} from "react-router-dom";


export default class Header extends Component {
    render(){
        return (<Layout.Header className="header">
        <Col md={6} xs={24}>
            <h1 className="daohang">xuyang</h1>
        </Col>
        <Col md={18} xs={0}>
            <span className="span daohang">|</span>
            <div className="daohang menu" >
                
                  
                    <NavLink to="/"><Icon type="home" />首页</NavLink>
                    <NavLink to="/book"><Icon type="book" />教程</NavLink>
                    <NavLink to="/about"><Icon type="info-circle-o" />关于</NavLink>
                
            </div>
            </Col>
                </Layout.Header>
        );
    }
}

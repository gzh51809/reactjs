import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import RouterList from "../../router/index";
import {Row,Col} from "antd";
const subMenu = [
    {
        item: "全部",
        path: "/index/all"
    },
    {
        item: "精华",
        path: "/index/good"
    },
    {
        item: "问答",
        path: "/index/ask"
    },
    {
        item: "分享",
        path: "/index/share"
    },
    {
        item: "招聘",
        path: "/index/job"
    },
    {
        item: "测试",
        path: "/index/dev"
    }
];

export default class Index extends Component{
    render(){
        return (
            <Row className="mainWrap">
            <Col md={6} xs={24} className="sider">
            <ul >
                <li className="conlist">
                {subMenu.map((item,index)=>{
                            return <NavLink to={item.path} 
                            key={index}>
                            {item.item}
                            </NavLink>
                        })}
                </li>
               
            </ul>
            
            </Col>
            <RouterList />
            </Row>
            
           
        );
    }
}
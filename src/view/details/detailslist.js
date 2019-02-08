import React,{Component} from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";
export default class DetailsList extends Component{
    render(){
        const {loading,reply_count,replies} = this.props;
        
        return (
        <Card
            loading = {loading}
            title = {reply_count + "回复"}
            type = "inner"
           
        >
            <List
                 className="lalala"
                dataSource={replies}
                itemLayout = "vertical"
                renderItem={item=>{
                    return (
                        <List.Item
                        className = "detailshuifua"
                            key = {item.id}
                            extra={item.ups.length>0?(<span className="huifu">有{item.ups.length}个人赞了这条回复</span>):""}
                        >

                                <List.Item.Meta
                                className = "detailshuifub"
                                  avatar={<Avatar src={item.author.avatar_url}/>}
                                  description = {<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link> 发表于: {item.create_at.split("T")[0]}</span> }
                              />
                          

                                
                                 <div className = "detailshuifuc"
                                 dangerouslySetInnerHTML={
                                          {
                                              __html: item.content
                                          }
                                      }></div>
                        </List.Item>
                    );
                }
                }
                >
                </List>
        </Card>);
    }
}
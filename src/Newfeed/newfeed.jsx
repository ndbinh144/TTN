import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './newfeed.css'
import { Layout, Menu, Button, Card, Avatar, Carousel, Icon } from 'antd';
import { Link } from 'react-router-dom'


const { Header, Content, Footer } = Layout;

export default class newfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],            
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('posts')){
            var posts = JSON.parse(localStorage.getItem('posts'));
            console.log(posts)
            this.setState({
                posts : posts
            })
        }
    }

    render() {
      var dsPosts = this.state.posts.map((post) => {
          return (
            <Card className="newfeed">
                <div className="imgPost">
                    <Carousel autoplay >
                        <img src={ require('../Images/a1.jpg') } alt="Images1"/>
                        <img src={ require('../Images/a2.jpg') } alt="Images2"/>
                        <img src={ require('../Images/a3.jpg') } alt="Images3"/>
                        <img src={ require('../Images/a4.jpg') } alt="Images4"/>                        
                    </Carousel>
                </div>
                <div className="icons">
                    <div className="titlePost">
                        <b>{post.titlePost}</b>
                        <div className="timePost">
                            <text>Đã đăng vào lúc: {post.timePost}.</text>
                        </div>
                    </div>
                    <Button size='small'>
                        <Icon type="edit" />                        
                    </Button>
                    <Button size='small'>
                        <Icon type="delete" />                        
                    </Button>
                </div>
                <div className="contentPost">
                    Địa chỉ: {post.addressPost} <br/>
                    Giá thuê: {post.rentalPrice}/tháng.<br/>
                    Diện tích: {post.square}m².<br/>
                    <br/>
                    Mô tả: {post.describePost}.
                </div>
            </Card>)
      });
      return (
        <Layout className="layout" style={{marginLeft: 160}}>
        <Header className="header">
          <div>
            <img src={ require('../Images/logo.png') }  className="logo" alt="Logo"/>
          </div>
          <Menu
            className="navbar"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item className="menuItem">
                <Button size='small'><b>Đăng Ký</b></Button>
            </Menu.Item>
            <Menu.Item className="menuItem">
                <Button size='small'><b>Đăng Nhập</b></Button>
            </Menu.Item>
            <Menu.Item key="4" className="menuItem"><Link to="/newfeed/1">Cá Nhân</Link></Menu.Item>
            <Menu.Item key="3" className="menuItem">Hướng Dẫn</Menu.Item>
            <Menu.Item key="2" className="menuItem"><Link to="/">Tìm Kiếm</Link></Menu.Item>
            <Menu.Item key="1" className="menuItem"><Link to="/">Trang Chủ</Link></Menu.Item>           
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Card className="inforUser">
                <Avatar size={128} icon="user" className="userAvatar"/>
                <div className="userName">
                    <b>__Chủ Trọ__</b>
                </div>
                <div className="buttonZone">
                    <div>
                        <Button type="primary" size='small' className="buttonEdit">Cập nhật thông tin</Button>
                    </div>
                    <div className="lowButton">
                        <Button type="primary" size='small' className="buttonList">Danh sách phòng trọ</Button>
                        <Button type="primary" size='small'><Link to="/post/1">Đăng Tin</Link></Button>
                    </div>
                </div>
            </Card>
            <Card className="newfeed">
                <div className="titleNewfeed">
                    <b><u> Tin đã đăng</u></b>
                </div>
                {dsPosts}
            </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TTN Design ©2018 Created by TTN Group
        </Footer>
      </Layout>
      )
    }
  }

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './postNews.css'
import { Layout, Menu, Button, Card, Avatar, Carousel, Icon } from 'antd';

const { Header, Content, Footer } = Layout;

export default class postNews extends Component {
    render() {
      return (
        <Layout className="layout">
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
            <Menu.Item key="4" className="menuItem">Cá Nhân</Menu.Item>
            <Menu.Item key="3" className="menuItem">Hướng Dẫn</Menu.Item>
            <Menu.Item key="2" className="menuItem">Tìm Kiếm</Menu.Item>
            <Menu.Item key="1" className="menuItem">Trang Chủ</Menu.Item>
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
                        <Button type="primary" size='small'>Đăng tin</Button>
                    </div>
                </div>
            </Card>
            <Card className="newfeed">
                <div className="titleNewfeed">
                    <b><u> Tin đã đăng</u></b>
                </div>

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
                        <b>Nhà trọ lá chuối</b>
                        <div className="timePost">
                            <text>Đã đăng vào lúc: 9:20, 29/10/2018.</text>
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
                    Địa chỉ: 364 Cộng Hòa, phường 4, quận Tân Bình, Tp.HCM <br/>
                    Giá: 10 tỉ/tháng.<br/>
                    Diện tích: 200m2.<br/>
                    <br/>
                    Mô tả: Nhà cho thuê cao cấp. Gần siêu thị, trường học. Giá cả hợp lý.
                </div>
                </Card>

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
                        <b>Nhà trọ lá chuối</b>
                        <div className="timePost">
                            <text>Đã đăng vào lúc: 9:20, 29/10/2018.</text>
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
                    Địa chỉ: 364 Cộng Hòa, phường 4, quận Tân Bình, Tp.HCM <br/>
                    Giá: 10 tỉ/tháng.<br/>
                    Diện tích: 200m2.<br/>
                    <br/>
                    Mô tả: Nhà cho thuê cao cấp. Gần siêu thị, trường học. Giá cả hợp lý.
                </div>
                </Card>

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
                        <b>Nhà trọ lá chuối</b>
                        <div className="timePost">
                            <text>Đã đăng vào lúc: 9:20, 29/10/2018.</text>
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
                    Địa chỉ: 364 Cộng Hòa, phường 4, quận Tân Bình, Tp.HCM <br/>
                    Giá: 10 tỉ/tháng.<br/>
                    Diện tích: 200m2.<br/>
                    <br/>
                    Mô tả: Nhà cho thuê cao cấp. Gần siêu thị, trường học. Giá cả hợp lý.
                </div>
                </Card>
                
            </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TTN Design ©2018 Created by TTN Group
        </Footer>
      </Layout>
      )
    }
  }

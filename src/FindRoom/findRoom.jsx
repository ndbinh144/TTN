import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './findRoom.css'
import { Layout, Menu, Button, Form, Row, Col, Icon, Select, Card, Carousel } from 'antd';
import { Link } from 'react-router-dom'


const { Header, Content, Footer } = Layout;
// const FormItem = Form.Item;
const Option = Select.Option;

export default class findRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        display: 'hidden',
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

  handleSearch () {
    this.setState({
      display: this.state.display === 'visible' ? 'hidden' : 'visible'
    })
  }

  // To generate mock Form.Item
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
            <img src={require('../Images/logo.png')} className="logo" alt="Logo" />
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
          <Form
          className="ant-advanced-search-form"
          >
          <Row>
          <Select defaultValue="TPHCM" style={{marginLeft:120, width: 120 }}>
            <Option value="TPHCM">TPHCM</Option>
            <Option value="HaNoi">Hà Nội</Option>
            <Option value="DongNai">Đồng Nai</Option>
            <Option value="BinhDuong">Bình Dương</Option>
          </Select>
          <Select defaultValue="Dưới 1 triệu" style={{ marginLeft:120, width: 150 }}>
            <Option value="Duoi1Trieu">Dưới 1 triệu</Option>
            <Option value="1Trieu5Trieu">Từ 1 đến 5 triệu</Option>
            <Option value="Tren5Trieu">Trên 5 triệu</Option>
          </Select>
          <Select defaultValue="5-20" style={{ marginLeft:120, width: 120 }}>
            <Option value="5-20">5-20 m2</Option>
            <Option value="20-50">20-50 m2</Option>
            <Option value="Tren50">Trên 50 m2</Option>
          </Select>
          </Row>
          <Row style={{ marginTop:10, marginBottom:10 }}>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={()=> this.handleSearch()}>Search</Button>
            </Col>
          </Row>
          <Row style={{ marginTop:10, marginBottom:10, visibility: this.state.display }}>
                <div className="titleNewfeed" style={{ visibility: this.state.display }}>
                    <b><u> Kết quả tìm kiếm</u></b>
                </div>
                {dsPosts}
          </Row>
          </Form>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TTN Design ©2018 Created by TTN Group
        </Footer>
      </Layout >
    )
  }
}

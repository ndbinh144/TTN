import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './postNews.css'
import { Layout, Menu, Button, Card, Input, Select } from 'antd';
import UploadImages from './../UploadImages/uploadImages';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const { Header, Content, Footer } = Layout;
const Option = Select.Option;
const provinceData = ['An Giang','Bà Rịa-Vũng Tàu','Bạc Liêu','Bắc Kạn','Bắc Giang','Bắc Ninh','Bến Tre','Bình Dương','Bình Định','Bình Phước','Bình Thuận','Cà Mau','Cao Bằng','Cần Thơ (TP)','Đà Nẵng (TP)','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Nội (TP)','Hà Tây','Hà Tĩnh','Hải Dương','Hải Phòng (TP)','Hòa Bình','Hồ Chí Minh (TP)','Hậu Giang','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lào Cai','Lạng Sơn','Lâm Đồng','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên - Huế','Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái'];

export default class newfeed extends Component {
    constructor(props,content) {
        super(props,content);
        this.state = {
            cityPost: "Hồ Chí Minh (TP)",
            addressPost: "",
            titlePost: "",
            describePost: "",
            rentalPrice: "",
            square: "",
            imgPost: [],
            timePost: "",
        };

        // this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onChangeCity(e) {
        this.setState({ cityPost: e });
    };

    onSubmit = async () => {
        var date = new Date().toLocaleDateString('en-GB');
        var time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
        minute: "numeric"});
        var datetime = time + ", " + date
        await this.setState ({ timePost : datetime });
        var posts
        if (localStorage.posts == null){
            posts = [
                this.state,
            ]
        }else{
            posts = [
                ...JSON.parse(localStorage.posts),
                this.state,
            ]
        }
        localStorage.setItem("posts", JSON.stringify(posts));
        this.context.router.history.push("/newfeed/1");
    };

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
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
            style={{ lineHeight: '60px' }}
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
            <Card className="formPost">
                <div>
                    <p className="titleInput">Chọn tỉnh, thành phố:</p>
                    <Select className="input"
                    name="cityPost"
                    defaultValue={provinceData[29]}
                    onChange={this.onChangeCity}
                    >
                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                    </Select>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Địa chỉ:</p>
                    <Input className="input"
                    name="addressPost"
                    placeholder="Số nhà cụ thể, tên đường..." 
                    onChange={this.onChange}></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Title:</p>
                    <Input className="input"
                    name="titlePost"
                    placeholder="Nhà lá chuối..." 
                    onChange={this.onChange}></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Mô tả:</p>
                    <Input className="input"
                    name="describePost"
                    placeholder="Chào bé Lê Văn Đạt, em còn làm ở đó không ta." 
                    onChange={this.onChange}></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Giá cho thuê:</p>
                    <Input className="input" 
                    name="rentalPrice"
                    placeholder="Giá cho thuê trong một tháng" 
                    onChange={this.onChange}></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Diện tích:</p>
                    <Input className="input"
                    name="square"
                    placeholder="Diện tích phòng/nhà trọ (m²)" 
                    onChange={this.onChange}></Input>
                    
                </div>
                
                <div className="uploadImages">

                </div>

                <UploadImages/>

                <div className="buttonPost">
                    <Button type="primary" onClick={this.onSubmit}>Đăng Tin</Button>
                </div>
            </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TTN Design ©2018 Created by TTN Group
        </Footer>
      </Layout>
      )
    }
  }

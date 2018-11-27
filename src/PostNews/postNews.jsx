import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './postNews.css'
import { Layout, Menu, Button, Card, Input, Select } from 'antd';
import UploadImages from './../UploadImages/uploadImages';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const Option = Select.Option;
const provinceData = ['An Giang','Bà Rịa-Vũng Tàu','Bạc Liêu','Bắc Kạn','Bắc Giang','Bắc Ninh','Bến Tre','Bình Dương','Bình Định','Bình Phước','Bình Thuận','Cà Mau','Cao Bằng','Cần Thơ (TP)','Đà Nẵng (TP)','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Nội (TP)','Hà Tây','Hà Tĩnh','Hải Dương','Hải Phòng (TP)','Hòa Bình','Hồ Chí Minh (TP)','Hậu Giang','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lào Cai','Lạng Sơn','Lâm Đồng','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên - Huế','Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái'];
const districtData = ['Quận 1','Quận 2','Quận 3','Quận 4','Quận 5','Quận 6','Quận 7','Quận 8','Quận 9','Quận 10','Quận 11','Quận 12','Quận Thủ Đức','Quận Bình Thạnh','Quận Gò Vấp','Quận Phú Nhuận','Quận Tân Phú','Quận Bình Tân','Quận Tân Bình','Huyện Nhà Bè','Huyện Bình Chánh','Huyện Hóc Môn','Huyện Củ Chi','Huyện Cần Giờ'];

export default class newfeed extends Component {
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
                <div className="titlePost">
                    Đăng tin
                </div>

                <div>
                    <p className="titleInput">Chọn tỉnh, thành phố:</p>
                    <Select className="input"
                    defaultValue={provinceData[29]}
                    onChange={this.handleProvinceChange}
                    >
                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                    </Select>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Chọn quận, huyện:</p>
                    <Select className="input"
                    onChange={this.handleProvinceChange}
                    >
                    {districtData.map(district => <Option key={district}>{district}</Option>)}
                    </Select>
                </div>
                
                <div className="padding_top_10">
                    <p className="titleInput">Chọn phường, xã, thị trấn:</p>
                    <Input className="input" ></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Số nhà, đường:</p>
                    <Input className="input" placeholder="Số nhà cụ thể, tên đường..."></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Giá cho thuê:</p>
                    <Input className="input" placeholder="Giá cho thuê trong một tháng"></Input>
                </div>

                <div className="padding_top_10">
                    <p className="titleInput">Diện tích:</p>
                    <Input className="input" placeholder="Diện tích phòng/nhà trọ"></Input>
                    
                </div>
                
                <div className="uploadImages">

                </div>

                <UploadImages/>

                <div className="buttonPost">
                    <Button type="primary"><Link to="/newfeed/1">Đăng Tin</Link></Button>
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

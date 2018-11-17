import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './findRoom.css'
import { Input } from 'antd';

const Search = Input.Search;

export default class findRoom extends Component {
  render() {
    return (
      <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>
    )
  }
}

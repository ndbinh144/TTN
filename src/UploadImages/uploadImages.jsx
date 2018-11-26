import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './uploadImages.css'
import { Upload, Button, Icon } from 'antd';

const fileList = [{
  uid: '-1',
  name: '111.png',
  status: 'done',
  url: 'http://nhavietxanh.vn/wp-content/uploads/2012/08/House-for-rent-in-dictrics-2-4.jpg',
  thumbUrl: 'http://nhavietxanh.vn/wp-content/uploads/2012/08/House-for-rent-in-dictrics-2-4.jpg',
}, {
  uid: '-2',
  name: '222.png',
  status: 'done',
  url: 'http://nhavietxanh.vn/wp-content/uploads/2012/08/House-for-rent-in-dictrics-2-4.jpg',
  thumbUrl: 'http://nhavietxanh.vn/wp-content/uploads/2012/08/House-for-rent-in-dictrics-2-4.jpg',
}];


const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

class UploadImages extends Component {
    render() {
        return(
            <div>
                <Upload {...props2}>
                <div className="float_left">
                    Hình ảnh:
                </div>
                <div className="button float_left">
                <Button>
                    <Icon type="upload" /> Upload
                </Button>
                </div>
                
                </Upload>
            </div>
        );
    }
}

export default UploadImages;
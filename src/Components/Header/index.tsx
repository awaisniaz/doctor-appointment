import * as React from 'react';
import './style.css'
import { menudata } from '../../config/menu_data';
import {Typography,Button } from 'antd';
import { DownOutlined,GlobalOutlined } from '@ant-design/icons'

const Header: React.FunctionComponent = ({ }) => {
  const { Title,Text } = Typography
  return (<div className='container-header' key="1">
    <div className='left-section'  key="1">
      <img src={'./images/logo.png'}  key="1"></img>
      <div className='menu-option'>
        {
          menudata?.map(item => {
            return <Title level={5}>{item?.title} {item?.active ? <DownOutlined className='more-menu' /> : null}</Title>
          })
        }
      </div>
    </div>
    <div className='right-section'>

    <div className='contact-section'>
      <div className='contact-logo'>
      <GlobalOutlined />
      </div>
      <div className='contacte-details'>
        <Text type='secondary'>Contact</Text>
        <Text className=''><b>+92362166162616</b></Text>
      </div>
    </div>
    <Button className='login-btn'>LOGIN / SIGNUP</Button>
    </div>
  </div>);
};

export default Header;

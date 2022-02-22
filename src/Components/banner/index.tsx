import React from 'react'
import {
    Input,Button, Space,Typography
}
 from 'antd'

 import  {SearchOutlined} from '@ant-design/icons'
import './styles.css'
const Banner = ()=> {
    const {Title,Text} = Typography
  return (
    <div className='banner flex justify-center align-middle flex-col '>
        <Space className='flex flex-col justify-center'>
            <Title>Search a Doctor,Make an appointement</Title>
            <Text>Discover the best doctor,hospital,clinic Near to you in a City </Text>
        </Space>
      <Space className='flex  justify-center mt-6'>
          <Input size='large' placeholder='Search location'>
          </Input>
          <Input size='large' placeholder='Search Doctor by specialization'>
          </Input>
          <Button type="primary" className='flex justify-center align-middle'>
            <SearchOutlined/>
          </Button>
      </Space>
    </div>
  )
}

export default Banner

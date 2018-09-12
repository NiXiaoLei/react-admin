import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Loading extends React.Component {
  
  render(){
    const icon = <Icon type="plus" style={{fontsize: 24}}></Icon>
    const iconLoading = <Icon type="loading" style={{fontSize: 24}} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{margin: '0 10px'}} />
          <Spin size="large"/>
          <Spin indicator={icon} spinning style={{marginLeft: 10}}/>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert 
            message="React"
            description="欢迎来到react"
            type="info"
          ></Alert>
          <Alert 
            message="React"
            description="欢迎来到react"
            type="warning"
          ></Alert>
          <Spin tip="加载中">
            <Alert 
              message="React"
              description="欢迎来到react"
              type="warning"
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert 
              message="React"
              description="欢迎来到react"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
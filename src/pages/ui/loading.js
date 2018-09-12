import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'

export default class Loading extends React.Component {
  
  render(){
    

    return (
      <div>
        <Card title="Spin用法" class="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large"/>
        </Card>
      </div>
    )
  }
}
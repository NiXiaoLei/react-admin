import React from 'react'
import {Card, Button, Radio} from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }

  handleCloseLoading = () =>{
    this.setState(()=>({
      loading: false
    }))
  }

  handleCHange = (e) =>{
    this.setState({
      size: e.target.value
    })
  }

  render(){
    return (
      <div >
        <Card title="基础类型" className="card-wrap">
          <Button type="primary">Button</Button>
          <Button>Button</Button>
          <Button type="dashed">Button</Button>
          <Button type="danger">Button</Button>
          <Button disabled>Button</Button>
        </Card>
        <Card title="基础类型" className="card-wrap">
          <Button icon="plus" loading={this.state.loading}  type="primary">确定</Button>
          <Button icon="edit" shape="circle" loading={this.state.loading} ></Button>
          <Button loading={this.state.loading}  >点击加载</Button>
          <Button shape="circle" loading={this.state.loading}  ></Button>
          <Button type="primary" onClick={this.handleCloseLoading} >关闭</Button>
        </Card>
        <Card title="基础类型" style={{marginBottom: 10}}>
          <Button.Group>
            <Button type="primary" icon="left" >返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="基础类型" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleCHange}>
            <Radio value="small" >小</Radio>
            <Radio value="default" >中</Radio>
            <Radio value="large" >大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Button</Button>
          <Button size={this.state.size}>Button</Button>
          <Button type="dashed" size={this.state.size}>Button</Button>
          <Button type="danger" size={this.state.size}>Button</Button>
          <Button disabled size={this.state.size}>Button</Button>
        </Card>
      </div>
    )
  }
}
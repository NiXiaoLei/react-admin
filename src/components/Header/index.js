import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
 // http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=5NvkjsUppg7PBuK9DbyeGRDGuXihnzaK
export default class Header extends Component {
  state = {
    
  }
  componentWillMount(){
    this.setState({
      userName: '河畔一脚'
    })
    setInterval(()=>{
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }

  getWeatherAPIData(){
    let city = '杭州'
    let ak = `5NvkjsUppg7PBuK9DbyeGRDGuXihnzaK`
    axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=${ak}`
    }).then((res)=>{
      console.log(res)
      if(res.status == 'success'){
        let {dayPictureUrl, weather } = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl,
          weather
        })
      }
    })
  }


  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎， 河畔一脚</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} />
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

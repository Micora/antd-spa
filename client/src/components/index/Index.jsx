import React, { Component } from 'react'; 
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { Card, Avatar, Row, Col, Progress, Timeline, Collapse, Table, Icon } from 'antd';
import zysoft from '../../style/img/avatar.jpg';
import './index.less';
import CountUp from 'react-countup';
import ReactEcharts from 'echarts-for-react';
const { Meta } = Card;

export default class MIndex extends Component {
    CountUp(){
        let imgSrc = ["mail","chat","cart","heart"];
        let imgName = ["Mails","Dialogue","Carts","Collection"];
        let count = ["1379","768","192","413"];
        return imgSrc.map(function(item,index){
            return(
                <Col md={6} key={item}>
                    <Card style={{ marginBottom: 16 }}>
                        <Meta
                            avatar={<Avatar src={require('../../style/img/'+item+'.png')} style={{width:48, height:48}}/>}
                            title={imgName[index]}
                            description={<CountUp start={0} end={count[index]} duration={2.75} style={{fontSize:20}}/>}
                        />
                    </Card>
                </Col>
            )
        });
    }
    getOption(){
        let option = {
            backgroundColor: "#fff",
            color: ['rgb(216, 151, 235)', 'rgb(246, 152, 153)', 'rgb(100, 234, 145)'],
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                left:'6%',
                width:'90%',
            },
            legend: {
                //x: 300,
                top: '7%',
                right: '3%',
                textStyle: {
                    color: 'gray',
                },
                data: ['网购', '线下', '其他']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            yAxis: {
                min: 0,
                max: 100,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
            },
            series: [{
                name: '网购',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [10, 40, 32, 20, 80, 90, 97]
            }, {
                name: '线下',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70]
            },{
                name: '其他',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [30, 40, 10, 20, 33, 66, 54]
            }]
        };
        return option;
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <div className='mindex'>
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div className="mindex-messages-box-item">
                                <div>
                                    <Icon type="wechat" className="mindex-wechat-icon"/>
                                </div>
                                <div>
                                    <CountUp start={0} end={1999} duration={2.75} className="mindex-wechat-num"/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div className="mindex-messages-box-item">
                                <div>
                                    <Icon type="qq" className="mindex-qq-icon"/>
                                </div>
                                <div>
                                    <CountUp start={0} end={1999} duration={2.75} className="mindex-wechat-num"/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div className="mindex-messages-box-item">
                                <div>
                                    <Icon type="taobao" className="mindex-taobao-icon"/>
                                </div>
                                <div>
                                    <CountUp start={0} end={1999} duration={2.75} className="mindex-wechat-num"/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div className="mindex-messages-box-item">
                                <div>
                                    <Icon type="weibo" className="mindex-weibo-icon"/>
                                </div>
                                <div>
                                    <CountUp start={0} end={1999} duration={2.75} className="mindex-wechat-num"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={16}>
                            <div className="mindex-chart-box">
                                <ReactEcharts
                                    option={this.getOption()}
                                />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='mindex-user'>
                                <div className='mindex-avatar'>
                                    <Avatar
                                        shape='circle'
                                        src={zysoft}
                                        style={{width: '60px', height: '60px', borderRadius: '50%', marginBottom:16}}
                                    />
                                    <div>zhaoyu</div>
                                    <div>zhaoyu_m69@163.com</div>
                                </div>
                                <div className='mindex-weather'>
                                    <div className='mindex-weather-img'>
                                        <img src={require('../../style/img/0.png')} alt=""/>
                                    </div>
                                    <div className='mindex-weather-info'>
                                        <span>南京</span>&nbsp;<span>16℃</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
   
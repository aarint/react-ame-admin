/**
 * 
 */

import React, { Component } from 'react';
import echarts from 'echarts';
import chinaJson from './ChinaJson';
//import {utilCityCenter} from "mapv";

export default class China extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillUpdate(prevProps, prevState) {
        this.initHome();
    }

    componentDidMount() {
        this.curCity = "";

        echarts.registerMap("china", chinaJson)
        this.homeChart = echarts.init(document.getElementById('homeChart'))
        this.initHome()
    }

    initHome() {
        let citys = this.props.polyData || [];

        let data = [];
        for (let c of citys) {
            // let val = i?10:20;
            // let city = utilCityCenter.getCenterByCityName(c.polygonName);
            // let macd = c.macro?c.macro:null
            // data.push({
            //     lng:city.lng,
            //     lat:city.lat,
            //     value:c.text,
            //     name:c.polygonName,
            //     macd:macd,
            //     cid:c.code
            // })
        }

        let convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = [data[i].lng, data[i].lat];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        macd: data[i].value,
                        cid: data[i].cid
                    });
                }
            }
            return res;
        };


        let option = {
            backgroundColor: '#FFFFFF',
            tooltip: {
                trigger: 'item',
                formatter: function (params, ticket, callback) {
                    return getHtext(params.data.macd);
                }
            },
            geo: [{
                map: 'china',
                //center: [114.528178, 38.028658],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        shadowBlur: 50,
                        shadowColor: 'rgba(50,103,213, 0.3)',
                        borderColor: '#3369D9'
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#87CEFA',
                    }
                },
                label: {
                    emphasis: {
                        show: false,
                    }
                }
            }, {
                map: 'china',
                //center: [114.528178, 38.028658],
                itemStyle: {
                    normal: {
                        show: false,
                        borderColor: '#aaa'
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#87CEFA',
                    }
                },
                label: {
                    emphasis: {
                        show: false,
                    }
                }
            }],
            series: [{
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return 20;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'center',
                        show: true,
                        color: '#666',
                    },
                    emphasis: {
                        show: true,
                        fontWeight: 'bold',
                        color: '#0083d2',
                        fontSize: 18
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(105, 218, 219)',
                        shadowBlur: 10,
                        shadowColor: 'rgb(105, 218, 219)'
                    }
                },
                zlevel: 1
            },

            ]
        };
        this.homeChart.setOption(option);
    }

    render() {
        return (<div style={styles.home} id="homeChart"></div>)
    }
}


function getHtext(arr) {
    if (!arr || !arr.length) return ""
    let str = ""
    for (let a of arr) {
        str += a.text + a.unit + '<br/>'
    }
    return str
}

const styles = {
    home: {
        width: '100%',
        height: '300px'
    }
}


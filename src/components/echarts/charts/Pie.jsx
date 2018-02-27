import React from 'react';

export default class Pie extends React.Component {
    constructor(props) {
        super(props);

        this.echarts = this.props.echarts;
    }

    render() {
        return (
            <div id="chartPie" style={{ width: '100%', minHeight: 300 }}></div>
        )
    }

    componentDidMount() {
        this.chartPie = this.echarts.init(document.getElementById('chartPie'));
        this.constructOption();
    }

    constructOption = () => {
        let option = {
            title: {
                text: '某站点用户访问来源',
                subtext: 'Demo Digital',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        this.chartPie.setOption(option);
    }
}
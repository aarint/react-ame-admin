import React from 'react';
import echarts from 'echarts';

export default class Views extends React.PureComponent {
    render() {
        return (
            <div id="views" className="box" style={{ height: '500px', background: '#FFFFFF' }}></div>
        )
    }

    componentDidMount() {
        this.views = echarts.init(document.getElementById('views'))
        this.initViews();
    }

    initViews = () => {
        const option = {
            backgroundColor: '#FFFFFF',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['Bei Jing', 'Guang Zhou', 'Hang Zhou', 'Shang Hai', 'Shen Zhen', 'Guang Xi', 'Chong Qing']
            },
            series: [
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                }
            ]
        };

        this.views.setOption(option);
    }
}
import React from 'react';
import * as echarts from 'echarts';

export default class Pie extends React.Component {
  private chartRef: HTMLDivElement | null = null;
  private chart: echarts.ECharts | null = null;

  componentDidMount() {
    if (this.chartRef) {
      this.chart = echarts.init(this.chartRef);
      this.constructOption();
    }
  }

  componentWillUnmount() {
    this.chart?.dispose();
  }

  constructOption = () => {
    if (!this.chart) return;
    const option = {
      title: {
        text: 'User Visit Sources',
        subtext: 'Demo Digital',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Affiliate', 'Video', 'Search'],
      },
      series: [
        {
          name: 'Visit Source',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Affiliate' },
            { value: 135, name: 'Video' },
            { value: 1548, name: 'Search' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    } as echarts.EChartsOption;
    this.chart.setOption(option);
  };

  render() {
    return (
      <div
        ref={(el) => (this.chartRef = el)}
        style={{ width: '100%', minHeight: 300 }}
      />
    );
  }
}

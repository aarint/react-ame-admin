import React from 'react';
import * as echarts from 'echarts';

interface ViewsProps {
  items?: () => React.ReactNode;
}

export default class Views extends React.PureComponent<ViewsProps> {
  private chartRef: HTMLDivElement | null = null;
  private chart: echarts.ECharts | null = null;

  componentDidMount() {
    if (this.chartRef) {
      this.chart = echarts.init(this.chartRef);
      this.initViews();
    }
  }

  componentWillUnmount() {
    this.chart?.dispose();
  }

  initViews = () => {
    if (!this.chart) return;
    const option: echarts.EChartsOption = {
      backgroundColor: '#FFFFFF',
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      grid: {
        left: '3%',
        right: '3%',
        top: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: { type: 'value' },
      yAxis: {
        type: 'category',
        data: [
          'Bei Jing',
          'Guang Zhou',
          'Hang Zhou',
          'Shang Hai',
          'Shen Zhen',
          'Guang Xi',
          'Chong Qing',
        ],
      },
      series: [
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: { show: true, position: 'insideRight' },
          data: [150, 212, 201, 154, 190, 330, 410],
        },
      ],
    };
    this.chart.setOption(option);
  };

  render() {
    return (
      <div
        id="views"
        className="box"
        ref={(el) => (this.chartRef = el)}
        style={{ height: '500px', background: '#FFFFFF' }}
      />
    );
  }
}

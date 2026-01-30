import React from 'react';
import * as echarts from 'echarts';

export default class Bar extends React.Component {
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
    const dataAxis = [
      '点', '击', '柱', '子', '或', '者', '两', '指', '在', '触',
      '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放',
    ];
    const data = [
      220, 182, 191, 234, 290, 330, 310, 123, 442, 321,
      90, 149, 210, 122, 133, 334, 198, 123, 125, 220,
    ];
    const dataShadow = data.map(() => 500);

    const option = {
      title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
      },
      xAxis: {
        data: dataAxis,
        axisLabel: { inside: true, color: '#fff' },
        axisTick: { show: false },
        axisLine: { show: false },
        z: 10,
      },
      yAxis: {
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: '#999' },
      },
      dataZoom: [{ type: 'inside' }],
      series: [
        {
          type: 'bar',
          itemStyle: { color: 'rgba(0,0,0,0.05)' },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
            emphasis: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' },
              ]),
            },
          },
          data,
        },
      ],
    } as echarts.EChartsOption;

    this.chart.setOption(option);
    const zoomSize = 6;
    this.chart.on('click', (params: { dataIndex: number }) => {
      this.chart?.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
      });
    });
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

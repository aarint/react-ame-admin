import React from 'react';
import * as echarts from 'echarts';

export default class Line extends React.Component {
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
    let base = +new Date(2016, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    let valueBase = Math.random() * 300;
    let valueBase2 = Math.random() * 50;
    const data: [string, number][] = [];
    const data2: [string, number][] = [];

    for (let i = 1; i < 10; i++) {
      base += oneDay;
      const now = new Date(base);
      const dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
      valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
      if (valueBase <= 0) valueBase = Math.random() * 300;
      data.push([dayStr, valueBase]);
      valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
      if (valueBase2 <= 0) valueBase2 = Math.random() * 50;
      data2.push([dayStr, valueBase2]);
    }

    const option: echarts.EChartsOption = {
      animation: false,
      title: {
        left: 'center',
        text: 'Touch Screen Tooltip & DataZoom Demo',
        subtext: '"tooltip" and "dataZoom" on mobile device',
      },
      legend: { top: 'bottom', data: ['意向'] },
      tooltip: {
        triggerOn: 'none',
        position: (pt: number[]) => [pt[0], 130],
      },
      toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: { dataZoom: { yAxisIndex: 'none' }, restore: {} },
      },
      xAxis: {
        type: 'time',
        axisPointer: {
          value: '2016-10-7',
          snap: true,
          lineStyle: { color: '#004E52', opacity: 0.5, width: 2 },
          label: {
            show: true,
            formatter: (params: unknown) => {
              const p = params as { value?: number };
              const v = typeof p.value === 'number' ? p.value : Number(p.value);
              const d = new Date(v);
              return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            },
            backgroundColor: '#004E52',
          },
          handle: { show: true, color: '#004E52' },
        },
        splitLine: { show: false },
      },
      yAxis: {
        type: 'value',
        axisTick: { inside: true },
        splitLine: { show: false },
        axisLabel: { inside: true, formatter: '{value}\n' },
        z: 10,
      },
      grid: { top: 110, left: 15, right: 15, height: 160 },
      dataZoom: [{ type: 'inside', throttle: 50 }],
      series: [
        {
          name: '模拟数据',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: { color: '#8ec6ad' },
          stack: 'a',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#8ec6ad' },
              { offset: 1, color: '#ffe' },
            ]),
          },
          data,
        },
        {
          name: '模拟数据',
          type: 'line',
          smooth: true,
          stack: 'a',
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: { color: '#d68262' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#d68262' },
              { offset: 1, color: '#ffe' },
            ]),
          },
          data: data2,
        },
      ],
    };

    this.chart.setOption(option);
  };

  render() {
    return (
      <div
        ref={(el) => (this.chartRef = el)}
        style={{ width: '100%', minHeight: 350 }}
      />
    );
  }
}

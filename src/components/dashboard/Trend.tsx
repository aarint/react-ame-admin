import React from 'react';
import { Row, Col } from 'antd';
import * as echarts from 'echarts';
import Calendar from './Calendar';

const styles: Record<string, React.CSSProperties> = {
  container: { marginBottom: '16px', textAlign: 'center', height: '375px' },
  item: { background: '#FFFFFF' },
};

export default class Trend extends React.PureComponent {
  private chartRef: HTMLDivElement | null = null;
  private chart: echarts.ECharts | null = null;

  componentDidMount() {
    if (this.chartRef) {
      this.chart = echarts.init(this.chartRef);
      this.chart.setOption(this.constructTrendOption());
    }
  }

  componentWillUnmount() {
    this.chart?.dispose();
  }

  constructTrendOption = (): echarts.EChartsOption => ({
    backgroundColor: '#ffffff',
    title: {
      text: '',
      left: '6%',
      textStyle: { fontWeight: 'normal', fontSize: 16, color: '#F1F1F3' },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { lineStyle: { color: '#57617B' } },
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['old', 'new', 'other'],
      right: '4%',
      textStyle: { fontSize: 12, color: '#57617B' },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { lineStyle: { color: '#57617B' } },
        data: [
          '13:00', '13:05', '13:10', '13:15', '13:20', '13:25',
          '13:30', '13:35', '13:40', '13:45', '13:50', '13:55',
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { lineStyle: { color: '#57617B' } },
        axisTick: { show: false },
        position: 'bottom',
        offset: 20,
        data: ['', '', '', '', '', '', '', '', '', '', '', ''],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'rate(%)',
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#57617B' } },
        axisLabel: { margin: 10 },
        splitLine: { lineStyle: { color: '#F1F1F3' } },
      },
    ],
    series: [
      {
        name: 'old',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: { width: 1 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(137, 189, 27, 0.3)' },
            { offset: 0.8, color: 'rgba(137, 189, 27, 0)' },
          ]),
        },
        itemStyle: { color: 'rgb(137,189,27)' },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      },
      {
        name: 'new',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: { width: 1 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 136, 212, 0.3)' },
            { offset: 0.8, color: 'rgba(0, 136, 212, 0)' },
          ]),
        },
        itemStyle: { color: 'rgb(0,136,212)' },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
      },
      {
        name: 'other',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: { width: 1 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(219, 50, 51, 0.3)' },
            { offset: 0.8, color: 'rgba(219, 50, 51, 0)' },
          ]),
        },
        itemStyle: { color: 'rgb(219,50,51)' },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
      },
    ],
  });

  render() {
    return (
      <Row gutter={12} style={styles.container}>
        <Col span={12}>
          <div
            ref={(el) => (this.chartRef = el)}
            className="box"
            style={{ ...styles.item, width: 'auto', height: '375px' }}
          >
            Visitors
          </div>
        </Col>
        <Col span={12}>
          <div
            className="box"
            style={{ ...styles.item, width: 'auto', height: '375px' }}
          >
            <Calendar />
          </div>
        </Col>
      </Row>
    );
  }
}

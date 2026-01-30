import React from 'react';
import * as echarts from 'echarts';

export default class Radar extends React.Component {
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
      tooltip: {},
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
      },
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 },
        ],
      },
      series: [
        {
          name: 'Budget vs Spending',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: 'Allocated Budget',
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: 'Actual Spending',
            },
          ],
        },
      ],
    } as unknown as echarts.EChartsOption;
    this.chart.setOption(option);
  };

  render() {
    return (
      <div
        ref={(el) => (this.chartRef = el)}
        style={{ width: '100%', minHeight: 370 }}
      />
    );
  }
}

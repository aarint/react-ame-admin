import { Component } from 'react';
import * as echarts from 'echarts';
// GeoJSON from JS module
import chinaJson from './ChinaJson.js';

interface ChinaState {
  [key: string]: unknown;
}

export default class China extends Component<object, ChinaState> {
  private homeChart: echarts.ECharts | null = null;

  componentDidMount() {
    echarts.registerMap('china', chinaJson as Parameters<typeof echarts.registerMap>[1]);
    const el = document.getElementById('homeChart');
    if (el) {
      this.homeChart = echarts.init(el);
      this.initHome();
    }
  }

  componentWillUnmount() {
    this.homeChart?.dispose();
  }

  initHome = () => {
    if (!this.homeChart) return;
    const data: { lng: number; lat: number; value: number; name: string; cid?: string }[] = [];
    const convertData = (d: typeof data) =>
      d.map((item) => ({
        name: item.name,
        value: [item.lng, item.lat].concat(item.value),
        macd: item.value,
        cid: item.cid,
      }));

    const option = {
      backgroundColor: '#FFFFFF',
      tooltip: {
        trigger: 'item',
        formatter: (params: unknown) =>
          getHtext((params as { data?: { macd?: unknown } })?.data?.macd),
      },
      geo: [
        {
          map: 'china',
          itemStyle: {
            borderWidth: 1,
            shadowBlur: 50,
            shadowColor: 'rgba(50,103,213, 0.3)',
            borderColor: '#3369D9',
            emphasis: { areaColor: '#87CEFA' },
          },
          label: { emphasis: { show: false } },
        },
        {
          map: 'china',
          itemStyle: {
            show: false,
            borderColor: '#aaa',
            emphasis: { show: false, areaColor: '#87CEFA' },
          },
          label: { emphasis: { show: false } },
        },
      ],
      series: [
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: () => 20,
          showEffectOn: 'emphasis',
          rippleEffect: { brushType: 'stroke' },
          hoverAnimation: true,
          label: {
            show: true,
            formatter: '{b}',
            position: 'center',
            color: '#666',
            emphasis: { show: true, fontWeight: 'bold', color: '#0083d2', fontSize: 18 },
          },
          itemStyle: {
            color: 'rgb(105, 218, 219)',
            shadowBlur: 10,
            shadowColor: 'rgb(105, 218, 219)',
          },
          zlevel: 1,
        },
      ],
    } as unknown as echarts.EChartsOption;
    this.homeChart.setOption(option);
  };

  render() {
    return (
      <div
        className="box"
        style={{ width: '100%', height: '500px' }}
        id="homeChart"
      />
    );
  }
}

function getHtext(arr: unknown): string {
  if (!arr || !Array.isArray(arr)) return '';
  return (arr as { text?: string; unit?: string }[])
    .map((a) => (a.text || '') + (a.unit || '') + '<br/>')
    .join('');
}

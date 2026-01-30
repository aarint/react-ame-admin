import React from 'react';
import * as echarts from 'echarts';

// OHLC: [open, close, low, high]
type OHLC = [number, number, number, number];

export default class KLine extends React.Component {
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

  /** EMA: k = 2/(N+1), EMA_today = Price * k + EMA_prev * (1-k); null for leading period */
  calcEMA = (closes: number[], period: number): (number | null)[] => {
    const k = 2 / (period + 1);
    const result: (number | null)[] = [];
    let ema: number | null = null;
    for (let i = 0; i < closes.length; i++) {
      if (i < period - 1) {
        result.push(null);
      } else if (ema === null) {
        ema = closes.slice(0, period).reduce((a, b) => a + b, 0) / period;
        result.push(Math.round(ema * 100) / 100);
      } else {
        ema = closes[i] * k + ema * (1 - k);
        result.push(Math.round(ema * 100) / 100);
      }
    }
    return result;
  };

  generateKLineData = (): { dates: string[]; data: OHLC[] } => {
    const dates: string[] = [];
    const data: OHLC[] = [];
    let base = +new Date(2024, 0, 1);
    const oneDay = 24 * 3600 * 1000;
    let open = 100;

    for (let i = 0; i < 60; i++) {
      base += oneDay;
      const d = new Date(base);
      dates.push(
        [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/')
      );
      const change = (Math.random() - 0.48) * 8;
      const close = Math.max(1, Math.round((open + change) * 100) / 100);
      const low = Math.min(open, close) - Math.random() * 2;
      const high = Math.max(open, close) + Math.random() * 2;
      data.push([open, close, low, high]);
      open = close;
    }

    return { dates, data };
  };

  constructOption = () => {
    if (!this.chart) return;
    const { dates, data } = this.generateKLineData();
    const closes = data.map((d) => d[1]);
    const ema5 = this.calcEMA(closes, 5);
    const ema10 = this.calcEMA(closes, 10);
    const ema20 = this.calcEMA(closes, 20);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Candlestick Chart',
        subtext: 'With EMA (5 / 10 / 20)',
        top: 12,
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 600 },
        subtextStyle: { fontSize: 12, color: '#666' },
        itemGap: 4,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
        backgroundColor: 'rgba(255,255,255,0.96)',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: { fontSize: 12, color: '#333' },
        formatter: (params: unknown) => {
          const arr = Array.isArray(params) ? params : [params];
          const candlestick = arr.find((x: { seriesName?: string }) => x.seriesName === 'Candlestick');
          const payload = candlestick as { name: string; data?: OHLC } | undefined;
          const [open, close, low, high] = payload?.data || [0, 0, 0, 0];
          const idx = arr[0]?.dataIndex ?? 0;
          const lines = [
            `<div style="margin-bottom:6px;font-weight:600">${payload?.name ?? ''}</div>`,
            `Open: ${open.toFixed(2)} &nbsp;&nbsp; Close: ${close.toFixed(2)}`,
            `Low: ${low.toFixed(2)} &nbsp;&nbsp; High: ${high.toFixed(2)}`,
          ];
          const v5 = ema5[idx]; const v10 = ema10[idx]; const v20 = ema20[idx];
          if (v5 != null) lines.push(`EMA5: ${v5.toFixed(2)}`);
          if (v10 != null) lines.push(`EMA10: ${v10.toFixed(2)}`);
          if (v20 != null) lines.push(`EMA20: ${v20.toFixed(2)}`);
          return lines.join('<br/>');
        },
      },
      legend: {
        data: ['Candlestick', 'EMA5', 'EMA10', 'EMA20'],
        top: 46,
        left: 'center',
        itemGap: 16,
        textStyle: { fontSize: 12 },
        itemWidth: 20,
        itemHeight: 10,
      },
      axisPointer: {
        link: [{ xAxisIndex: 'all' }],
        label: { backgroundColor: '#5c6bc0', borderColor: 'transparent' },
      },
      grid: [
        { left: 48, right: 32, top: 88, height: 232, containLabel: false },
        { left: 48, right: 32, top: '72%', height: 80, containLabel: false },
      ],
      xAxis: [
        {
          type: 'category',
          data: dates,
          boundaryGap: true,
          axisLine: { onZero: false, lineStyle: { color: '#e0e0e0' } },
          axisTick: { show: false },
          axisLabel: { color: '#666', fontSize: 11 },
          splitLine: { show: false },
          min: 'dataMin',
          max: 'dataMax',
          axisPointer: { z: 100 },
        },
        {
          type: 'category',
          gridIndex: 1,
          data: dates,
          boundaryGap: true,
          axisLine: { onZero: false, lineStyle: { color: '#e0e0e0' } },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          min: 'dataMin',
          max: 'dataMax',
        },
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          splitArea: { show: true, areaStyle: { color: ['rgba(0,0,0,0.02)', 'transparent'] } },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { formatter: '{value}', color: '#666', fontSize: 11 },
          splitLine: { lineStyle: { color: '#eee', type: 'dashed' } },
        },
        {
          type: 'value',
          scale: true,
          gridIndex: 1,
          splitNumber: 2,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
        },
      ],
      dataZoom: [
        { type: 'inside', xAxisIndex: [0, 1], start: 50, end: 100, zoomOnMouseWheel: true, moveOnMouseMove: true },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: 'slider',
          bottom: 8,
          height: 20,
          start: 50,
          end: 100,
          borderColor: '#e0e0e0',
          fillerColor: 'rgba(92,107,192,0.15)',
          handleStyle: { color: '#5c6bc0' },
          textStyle: { fontSize: 11, color: '#666' },
          dataBackground: { lineStyle: { color: '#ccc' }, areaStyle: { color: 'transparent' } },
        },
      ],
      series: [
        {
          name: 'Candlestick',
          type: 'candlestick',
          data,
          itemStyle: {
            color: '#e53935',
            color0: '#00897b',
            borderColor: '#e53935',
            borderColor0: '#00897b',
            borderWidth: 1,
          },
        },
        {
          name: 'EMA5',
          type: 'line',
          data: ema5,
          symbol: 'none',
          smooth: true,
          lineStyle: { width: 2, color: '#ff8f00' },
        },
        {
          name: 'EMA10',
          type: 'line',
          data: ema10,
          symbol: 'none',
          smooth: true,
          lineStyle: { width: 2, color: '#5c6bc0' },
        },
        {
          name: 'EMA20',
          type: 'line',
          data: ema20,
          symbol: 'none',
          smooth: true,
          lineStyle: { width: 2, color: '#00838f' },
        },
        {
          name: 'Volume',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          barMaxWidth: 6,
          data: data.map(([, close], i) => {
            const prev = i > 0 ? data[i - 1][1] : close;
            return {
              value: Math.round(Math.random() * 1000 + 500),
              itemStyle: {
                color: close >= prev ? 'rgba(229,57,53,0.7)' : 'rgba(0,137,123,0.7)',
              },
            };
          }),
        },
      ],
    };

    this.chart.setOption(option);
  };

  render() {
    return (
      <div
        ref={(el) => (this.chartRef = el)}
        style={{ width: '100%', minHeight: 450 }}
      />
    );
  }
}

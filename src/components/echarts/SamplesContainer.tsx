import React from 'react';
import Line from './charts/Line';
import Pie from './charts/Pie';
import Bar from './charts/Bar';
import Radar from './charts/Radar';

const charts = [
  { type: 'line', title: 'Tooltip & DataZoom' },
  { type: 'radar', title: 'Basic Radar' },
  { type: 'pie', title: 'Basic Pie' },
  { type: 'bar', title: 'Basic Bar' },
];

const styles: Record<string, React.CSSProperties> = {
  container: { padding: '10px 0' },
  item: { margin: '10px 0', background: '#FFFFFF' },
};

export default class SamplesContainer extends React.Component {
  renderChart = (type: string) => {
    switch (type) {
      case 'line':
        return <Line />;
      case 'bar':
        return <Bar />;
      case 'pie':
        return <Pie />;
      case 'radar':
        return <Radar />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div>
          Please reference the demo of{' '}
          <a
            href="https://echarts.apache.org/examples/en/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECharts
          </a>{' '}
          official site.
        </div>
        <ul style={styles.container}>
          {charts.map((item) => (
            <li key={item.type} className="box" style={styles.item}>
              <div style={{ padding: 10 }}>{item.title}</div>
              <div style={{ padding: '0 10px' }}>{this.renderChart(item.type)}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from 'react';
import { Switch } from 'antd';

const styles: Record<string, React.CSSProperties> = {
  container: { background: '#FFFFFF', height: 600, padding: '10px' },
  operations: { padding: '5px' },
  map: { width: '100%', height: '100%', background: '#f0f0f0', minHeight: 500 },
};

export default class BaiduContainer extends React.Component<
  object,
  { data: { geometry: { type: string; coordinates: number[] }; count: number }[] }
> {
  state = { data: [] };

  componentDidMount() {
    this.constructDataSet();
  }

  constructDataSet = () => {
    const cityCenter = { lng: 116.404, lat: 39.915 };
    const data: { geometry: { type: string; coordinates: number[] }; count: number }[] = [];
    for (let i = 0; i < 300; i++) {
      data.push({
        geometry: {
          type: 'Point',
          coordinates: [
            cityCenter.lng - 2 + Math.random() * 4,
            cityCenter.lat - 2 + Math.random() * 4,
          ],
        },
        count: 30 * Math.random(),
      });
    }
    this.setState({ data });
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.operations}>
          Marker: <Switch /> HoneyComb: <Switch />
        </div>
        <div className="box" style={styles.map}>
          <p style={{ padding: 20 }}>
            Baidu Map: Install <code>react-bmap</code> and add your Baidu API key to
            enable the map. This is a placeholder.
          </p>
        </div>
      </div>
    );
  }
}

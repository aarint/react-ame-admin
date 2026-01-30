import React from 'react';
import { Row, Col } from 'antd';
import { BarChartOutlined, BookOutlined, MessageOutlined } from '@ant-design/icons';

const styles: Record<string, React.CSSProperties> = {
  container: {
    marginBottom: '16px',
    textAlign: 'center',
    height: '40px',
    lineHeight: '40px',
  },
  item: {
    background: '#FFFFFF',
    height: '40px',
    lineHeight: '40px',
  },
};

export default class Summary extends React.PureComponent {
  render() {
    return (
      <Row gutter={12} style={styles.container}>
        <Col span={6}>
          <div className="box" style={styles.item}>
            <BarChartOutlined style={{ color: 'red', fontSize: 18 }} /> Tasks
          </div>
        </Col>
        <Col span={6}>
          <div className="box" style={styles.item}>
            <BookOutlined style={{ color: 'green', fontSize: 18 }} /> Orders
          </div>
        </Col>
        <Col span={6}>
          <div className="box" style={styles.item}>
            <MessageOutlined style={{ color: 'blue', fontSize: 18 }} /> Messages
          </div>
        </Col>
        <Col span={6}>
          <div className="box" style={styles.item}>
            Weather
          </div>
        </Col>
      </Row>
    );
  }
}

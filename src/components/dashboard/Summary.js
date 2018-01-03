import React from 'react';
import { Row, Col } from 'antd';

export default class Summary extends React.PureComponent {
    render() {
        return (
            <Row gutter={12} style={styles.container}>
                <Col span={6}><div style={styles.item}>Tasks</div></Col>
                <Col span={6}><div style={styles.item}>Orders</div></Col>
                <Col span={6}><div style={styles.item}>Messages</div></Col>
                <Col span={6}><div style={styles.item}>Weather</div></Col>
            </Row>
        )
    }
}

const styles = {
    container: {
        marginBottom: '16px',
        textAlign: 'center',
        height: '100px',
        lineHeight: '100px'
    },
    item: {
        background: '#FFFFFF',
        height: '100px',
        lineHeight: '80px'
    }
}
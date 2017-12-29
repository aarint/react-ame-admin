import React from 'react';
import { Row, Col } from 'antd';

export default class Summary extends React.PureComponent {
    render() {
        return (
            <Row gutter={16} style={styles.container}>
                <Col span={6}><div style={styles.item}>Visitors</div></Col>
                <Col span={6}><div style={styles.item}>Tasks</div></Col>
                <Col span={12}><div style={Object.assign({}, styles.item, { width: 'auto' })}>Messages</div></Col>
            </Row>

        )
    }
}

const styles = {
    container: {
        marginBottom: '16px',
        textAlign: 'center',
        height: '80px',
        lineHeight: '80px'
    },
    item: {
        background: '#FFFFFF',
        height: '80px',
        lineHeight: '80px'
    }
}
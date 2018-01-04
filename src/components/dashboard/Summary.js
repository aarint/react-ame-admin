import React from 'react';
import { Row, Col, Icon } from 'antd';

export default class Summary extends React.PureComponent {
    render() {
        return (
            <Row gutter={12} style={styles.container}>
                <Col span={6}><div style={styles.item}><Icon type="bars" style={{color:'red',fontSize:18}}/>&nbsp;Tasks</div></Col>
                <Col span={6}><div style={styles.item}><Icon type="book" style={{color:'green',fontSize:18}}/>&nbsp;Orders</div></Col>
                <Col span={6}><div style={styles.item}><Icon type="message" style={{color:'blue',fontSize:18}}/>&nbsp;Messages</div></Col>
                <Col span={6}><div style={styles.item}>Weather</div></Col>
            </Row>
        )
    }
}

const styles = {
    container: {
        marginBottom: '16px',
        textAlign: 'center',
        height: '40px',
        lineHeight: '40px'
    },
    item: {
        background: '#FFFFFF',
        height: '40px',
        lineHeight: '40px'
    }
}
import React from 'react';
import China from './dashboard/China';
import Summary from './dashboard/Summary';
import Trend from './dashboard/Trend';
import { Row, Col } from 'antd';

export default class IndexContainer extends React.Component {
    constructVisitors = () => {
        let items = [{
            name: 'Beijing', value: 1234
        }, {
            name: 'Shanghai', value: 324
        }, {
            name: 'Shenzhen', value: 345
        }, {
            name: 'Guangzhou', value: 345
        }];

        return items.map((item) => {
            return <li key={item.name} style={{ height: 30, padding: '5px 0' }}><span>{item.name}</span>&nbsp;<span style={{background:'#08ee3a'}}>{item.value}</span></li>
        })
    }

    render() {
        return (
            <div style={styles.main}>
                <Summary />
                <Trend />
                <div style={styles.map}>
                    <Row gutter={16}>
                        <Col span={18}>
                            <China />
                        </Col>
                        <Col span={6}>
                            <ul style={{ height: '500px', background: '#FFFFFF' }}>{this.constructVisitors()}</ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
    },
    map: {
        width: '100%',
        height: 'auto',
        margin: '5px 0'
    }
}
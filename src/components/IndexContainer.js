import React from 'react';
import China from './dashboard/China';
import Views from './dashboard/Views';
import Summary from './dashboard/Summary';
import Trend from './dashboard/Trend';
import { Row, Col } from 'antd';

export default class IndexContainer extends React.Component {
    constructVisitors = () => {
        let items = [{
            name: 'Bei Jing', value: 1234
        }, {
            name: 'Shang Hai', value: 324
        }, {
            name: 'Shen Zhen', value: 345
        }, {
            name: 'Guang Zhou', value: 345
        }, {
            name: 'Hang Zhou', value: 345
        }, , {
            name: 'Guang Xi', value: 345
        }];

        return items.map((item) => {
            return <li key={item.name} style={{ height: 30, padding: '5px 0' }}><span>{item.name}</span>&nbsp;<span style={{ background: '#08ee3a' }}>{item.value}</span></li>
        })
    }

    render() {
        return (
            <div style={styles.main}>
                <Summary />
                <Trend />
                <div style={styles.map}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <China/>
                        </Col>
                        <Col span={8}>
                            <Views items={this.constructVisitors} />
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
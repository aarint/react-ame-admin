import React from 'react';
import China from './dashboard/China';
import Summary from './dashboard/Summary';
import Trend from './dashboard/Trend';

export default class IndexContainer extends React.Component {
    constructVisitors = () => {
        let items = [{
            name: 'China', value: 1234
        }, {
            name: 'Unite States', value: 324
        }, {
            name: 'Turkey', value: 345
        }];

        return items.map((item) => {
            return <li key={item.name}><span>{item.name}</span><span>{item.value}</span></li>
        })
    }

    render() {
        return (
            <div style={styles.main}>
                <Summary />
                <Trend />
                <div style={styles.map}>
                    <label>Country Visitors</label>
                    <div style={styles.content}>
                        <div style={styles.left}>
                            <China />
                        </div>
                        <div style={styles.right}>
                            <ul>{this.constructVisitors()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    main: {
    },
    map: {
        position: 'relative',
        background: '#FFFFFF',
        width: '100%',
        height: '100%',
        margin: '5px 0'
    },
    content: {
        position: 'relative',
        background: 'green',
        width: '100%',
        height: '100%',
        ul: {
            lineType: 'none'
        }
    },
    left: {
        width: '70%', float: 'left'
    },
    right: {
        position: 'relative',
        width: '30%', float: 'left'
    }
}
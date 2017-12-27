import React from 'react';
import China from './dashboard/China';

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
                <div>Dashboard Content</div>
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
    main: {},
    map: {
        width: '100%',
        height: 'auto',
        margin: '5px 0'
    },
    content: {
        background: 'green',
        width: '100%',
        ul:{
            lineType:'none'
        }
    },
    left: {
        width: '60%', float: 'left'
    },
    right: {
        width: '40%', float: 'left'
    }
}
import React from 'react';

export default class SamplesContainer extends React.Component {
    render() {
        return (
            <ul style={styles.container}>
                {this.getAllCharts()}
            </ul>
        )
    }

    getAllCharts = () => {
        const charts = [
            { type: 'line' },
            { type: 'radar' },
            { type: 'pie' },
            { type: 'bar' }
        ]

        return charts.map((item, index) => {
            return (
                <li className="box" style={styles.item}>
                    <label>{item.type}</label>
                    <div>
                    </div>
                </li>
            )
        })
    }

    renderChart = (type) => {

    }
}

const styles = {
    container: {
        padding: '10px'
    },
    item: {
        background: '#FFFFFF',
    }
}


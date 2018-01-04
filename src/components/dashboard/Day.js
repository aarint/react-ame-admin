import React from 'react';

export default class Day extends React.PureComponent {
    render() {
        const { text } = this.props;

        return (
            <div style={styles.day}>{text}</div>
        )
    }
}

const styles = {
    day: {
        float: 'left',
        width: '14%',
        height: '20%',
        margin: '3px',
        border: 'solid 1px #000000'
    }
}
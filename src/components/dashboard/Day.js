import React from 'react';

export default class Day extends React.PureComponent {
    render() {
        const { text, isSunday, isStarday } = this.props;
        const bk = isSunday || isStarday ? 'silver' : '#FFFFFF';

        return (
            <div style={Object.assign({}, styles.day, { background: bk })}>
                <div style={styles.title}>{text}</div>
                <ul></ul>
            </div>
        )
    }
}

const styles = {
    day: {
        background: '#FFFFFF',
        width: '14%',
        height: '20%',
        border: 'solid 1px #000000',
        padding: '3px',
        minWidth: '30px',
        minHeight: '30px'
    },
    title: {
        width: '100%',
        textAlign: 'right'
    }
}
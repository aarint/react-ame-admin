import React from 'react';
import Day from './Day';

export default class Calendar extends React.PureComponent {
    render() {
        return (
            <div style={styles.container}>
                {this.constuctBase()}
            </div>
        )
    }

    constuctBase = () => {
        let month = [];

        for (let i = 0; i < 5; i++) {
            let weeks = [];
            for (let j = 0; j < 7; j++) {
                weeks.push(<Day text={j} />);
            }

            month.push(weeks);
        }

        return month;
    }
}

const styles = {
    container: {
        padding: '10px'
    }
}
import React from 'react';
import Week from './Week';
import Day from './Day';

function getDaysInOneMonth(year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
}

export default class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            year: (new Date()).getFullYear(),
            month: (new Date()).getMonth() + 1,
        }
    }

    render() {
        const { year, month } = this.state

        return (
            <div style={styles.container}>
                <div style={styles.topBar}><span>{year}/{month}</span><div><span>{"<"}</span><button>Today</button><span>{">"}</span></div></div>
                {this.constructMonth()}
            </div>
        )
    }

    componentDidMount(){
        getDaysInOneMonth
    }

    constructMonth = () => {
        let month = [];

        for (let i = 0; i < 5; i++) {
            let week = (<Week>{this.constructWeek()}</Week>);
            month.push(week);
        }

        return month;
    }

    constructWeek = () => {
        let weeks = [];
        for (let j = 0; j < 7; j++) {
            weeks.push(<Day text={j} isSunday={j === 0 ? true : false} isStarday={j === 6 ? true : false} />)
        }

        return weeks;
    }
}

const styles = {
    container: {
        padding: '10px',
    },
    topBar: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}
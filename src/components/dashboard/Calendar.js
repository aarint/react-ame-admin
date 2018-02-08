import React from 'react';
import Week from './Week';
import Day from './Day';

function getDaysInOneMonth(year, month) {
    month = parseInt(month, 10);
    var d = new Date(year, month, 0);
    return d.getDate();
}

function getPreMonthDays(year, month) {
    return getDaysInOneMonth(year, month);
}

function getNextMonth() {

}

export default class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);

        const year = (new Date()).getFullYear();
        const month = (new Date()).getMonth() + 1;

        const preMonth = (month - 1 < 0) ? 12 : (month - 1);
        const preYear = preMonth === 12 ? year - 1 : year;

        let days = this.constructDays(year, month);

        this.state = {
            year: year,
            month: month,
            days: days,
            preYear: preYear,
            preMonthDays: getPreMonthDays(year, month)
        }
    }

    render() {
        const { year, month, days } = this.state;

        return (
            <div style={styles.container}>
                <div style={styles.topBar}>
                    <div style={styles.curYM}>{year}/{month}</div>
                    {/* <div><span>{"<"}</span><button>Today</button><span>{">"}</span></div> */}
                </div>
                <div className="week-info">
                    <div className="week-day">Sun</div>
                    <div className="week-day">Mon</div>
                    <div className="week-day">Tue</div>
                    <div className="week-day">Wed</div>
                    <div className="week-day">Thu</div>
                    <div className="week-day">Fri</div>
                    <div className="week-day">Sta</div>
                </div>
                {this.constructMonth()}
            </div>
        )
    }

    constructMonth = () => {
        const { year, days } = this.state;
        let month = [];

        for (let i = 0; i < 5; i++) {
            let wdays = days.slice(i * 7, i * 7 + 7);
            let week = (<Week key={i}>{this.constructWeek(wdays)}</Week>);
            month.push(week);
        }

        return month;
    }

    constructWeek = (wdays) => {
        let weeks = [];
        for (let j = 0; j < 7; j++) {
            const events1 = [];
            const events2 = ['test 1', 'test event 2'];
            const events3 = [];

            weeks.push(<Day key={`d${j}`} events={wdays[j].date === 8 ? events2 : []} day={wdays[j]} isSunday={j === 0 ? true : false} isStarday={j === 6 ? true : false} />)
        }

        return weeks;
    }

    constructDays = (year, month) => {
        let days = [];

        const preMonth = (month - 1 < 0) ? 12 : (month - 1);
        const preYear = preMonth === 12 ? year - 1 : year;
        const preMonthDays = new Date(preYear, preMonth, 0).getDate();

        let firstDay = new Date(year, month - 1, 1).getDay();

        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({
                isPrev: true,
                date: preMonthDays - i
            });
        }

        for (let i = 1, monthDay = new Date(year, month, 0).getDate(); i <= monthDay; i++) {
            days.push({
                isPrev: false,
                date: i
            });
        }

        if (days.length < 35) {
            let lost = parseInt(35 - parseInt(days.length));
            for (let m = 1; m <= lost; m++) {
                days.push({
                    isNext: true,
                    date: m
                });
            }
        }

        return days;
    }
}

const styles = {
    container: {
        padding: '10px',
        minWidth: 430,
        minHeight: 375
    },
    topBar: {
        display: 'flex',
        justifyContent: 'felx-start'
    },
    curYM: {
        paddingLeft: 5,
        fontSize: 16,
        color: 'rgb(0,0,0)'
    }
}
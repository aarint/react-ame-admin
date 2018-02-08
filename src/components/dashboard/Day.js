import React from 'react';

export default class Day extends React.PureComponent {
    render() {
        const { day, isSunday, isStarday, events } = this.props;
        const bk = isSunday || isStarday ? 'rgb(245,245,245)' : '#FFFFFF';

        return (
            <div style={Object.assign({}, styles.day, { background: bk })}>
                <div style={styles.title}>{this.constructDay(day)}</div>
                <ul style={styles.event}>
                    {this.constructEvents(events)}
                </ul>
            </div>
        )
    }

    constructDay = (day) => {
        if (day.isPrev || day.isNext) {
            return <span style={styles.notInMonth}>{day.date}</span>
        } else {
            return <span style={styles.inMonth}>{day.date}</span>
        }
    }

    constructEvents = (events) => {
        let items = [];

        if (events && events.length > 2) {
            items.push(<li style={styles.detail} key="1">{events[0]}</li>);
            items.push(<li style={styles.detail} key="2">{`${events.length - 2} more...`}</li>);
        } else {
            items = events.map((item, index) => {
                return <li style={styles.detail} key="1">{item}</li>
            })
        }

        return items;
    }
}

const styles = {
    day: {
        background: '#FFFFFF',
        width: '14%',
        height: 60,
        border: 'solid 1px rgb(230,229,230)',
        padding: '2px',
        minWidth: '30px',
        minHeight: '40px'
    },
    title: {
        width: '100%',
        textAlign: 'right'
    },
    notInMonth: {
        color: 'rgb(135,135,135)'
    },
    inMonth: {
        fontWeight: 'bold'
    },
    event: {
        fontSize: 10,
        width: '100%',
        padding: 0,
        margin: 0,
    },
    detail: {
        width: '98%',
        textAlign: 'right',
        background: 'rgb(94,171,242)',
        color: '#FFFFFF',
        fontWeight: 'bold',
        borderRadius: 2,
        marginBottom: 1
    }
}
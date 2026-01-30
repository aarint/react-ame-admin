import React from 'react';

interface DayInfo {
  isPrev?: boolean;
  isNext?: boolean;
  date: number;
}

interface DayProps {
  day: DayInfo;
  isSunday?: boolean;
  isStarday?: boolean;
  events?: string[];
}

const styles: Record<string, React.CSSProperties> = {
  day: {
    background: '#FFFFFF',
    width: '14%',
    height: 60,
    border: 'solid 1px rgb(230,229,230)',
    padding: '2px',
    minWidth: '30px',
    minHeight: '40px',
  },
  title: { width: '100%', textAlign: 'right' },
  notInMonth: { color: 'rgb(135,135,135)' },
  inMonth: { fontWeight: 'bold' },
  event: { fontSize: 10, width: '100%', padding: 0, margin: 0 },
  detail: {
    width: '98%',
    textAlign: 'right',
    background: 'rgb(94,171,242)',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: 2,
    marginBottom: 1,
  },
};

export default class Day extends React.PureComponent<DayProps> {
  constructDay = (day: DayInfo) => {
    if (day.isPrev || day.isNext) {
      return <span style={styles.notInMonth}>{day.date}</span>;
    }
    return <span style={styles.inMonth}>{day.date}</span>;
  };

  constructEvents = (events: string[] = []) => {
    if (events.length > 2) {
      return [
        <li style={styles.detail} key="1">{events[0]}</li>,
        <li style={styles.detail} key="2">{`${events.length - 2} more...`}</li>,
      ];
    }
    return events.map((item, index) => (
      <li style={styles.detail} key={index}>{item}</li>
    ));
  };

  render() {
    const { day, isSunday, isStarday, events = [] } = this.props;
    const bk = isSunday || isStarday ? 'rgb(245,245,245)' : '#FFFFFF';

    return (
      <div style={{ ...styles.day, background: bk }}>
        <div style={styles.title}>{this.constructDay(day)}</div>
        <ul style={styles.event}>{this.constructEvents(events)}</ul>
      </div>
    );
  }
}

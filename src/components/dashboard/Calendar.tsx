import React from 'react';
import Week from './Week';
import Day from './Day';

interface DayInfo {
  isPrev?: boolean;
  isNext?: boolean;
  date: number;
}

interface CalendarState {
  year: number;
  month: number;
  days: DayInfo[];
  preYear: number;
  preMonthDays: number;
}

const styles: Record<string, React.CSSProperties> = {
  container: { padding: '10px', minWidth: 430, minHeight: 375 },
  topBar: { display: 'flex', justifyContent: 'flex-start' },
  curYM: { paddingLeft: 5, fontSize: 16, color: 'rgb(0,0,0)' },
};

export default class Calendar extends React.PureComponent<object, CalendarState> {
  constructor(props: object) {
    super(props);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const preMonth = month - 1 < 0 ? 12 : month - 1;
    const preYear = preMonth === 12 ? year - 1 : year;
    const days = this.constructDays(year, month);
    this.state = {
      year,
      month,
      days,
      preYear,
      preMonthDays: new Date(preYear, preMonth, 0).getDate(),
    };
  }

  constructMonth = () => {
    const { days } = this.state;
    const month: React.ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
      const wdays = days.slice(i * 7, i * 7 + 7);
      month.push(
        <Week key={i}>{this.constructWeek(wdays)}</Week>
      );
    }
    return month;
  };

  constructWeek = (wdays: DayInfo[]) => {
    const weeks: React.ReactNode[] = [];
    for (let j = 0; j < 7; j++) {
      const events2 = ['test 1', 'test event 2'];
      weeks.push(
        <Day
          key={`d${j}`}
          events={wdays[j]?.date === 8 ? events2 : []}
          day={wdays[j]}
          isSunday={j === 0}
          isStarday={j === 6}
        />
      );
    }
    return weeks;
  };

  constructDays = (year: number, month: number): DayInfo[] => {
    const days: DayInfo[] = [];
    const preMonth = month - 1 < 0 ? 12 : month - 1;
    const preYear = preMonth === 12 ? year - 1 : year;
    const preMonthDays = new Date(preYear, preMonth, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ isPrev: true, date: preMonthDays - i });
    }

    const monthDay = new Date(year, month, 0).getDate();
    for (let i = 1; i <= monthDay; i++) {
      days.push({ isPrev: false, date: i });
    }

    if (days.length < 35) {
      const lost = 35 - days.length;
      for (let m = 1; m <= lost; m++) {
        days.push({ isNext: true, date: m });
      }
    }

    return days;
  };

  render() {
    const { year, month } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.curYM}>{year}/{month}</div>
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
    );
  }
}

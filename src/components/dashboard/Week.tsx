import React from 'react';

interface WeekProps {
  children?: React.ReactNode;
}

export default class Week extends React.Component<WeekProps> {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '3px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

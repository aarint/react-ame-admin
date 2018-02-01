import React from 'react';

export default class Week extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBottom: '3px' }}>
                {this.props.children}
            </div>
        )
    }
}
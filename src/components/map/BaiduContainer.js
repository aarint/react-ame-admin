import React from 'react';

export default class BaseContainer extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div>shit code</div>
            </div>
        )
    }
}

const styles = {
    container: {
        background: '#FFFFFF'
    }
}
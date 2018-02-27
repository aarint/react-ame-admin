import React from 'react';
import { Map, NavigationControl, MapTypeControl, ScaleControl, OverviewMapControl, MapvLayer } from 'react-bmap';
import { Switch } from 'antd';

export default class BaiduContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {
        const { data } = this.state;

        return (
            <div style={styles.container}>
                <div style={styles.operations}>
                    Marker: <Switch />&nbsp;
                    HoneyComb:<Switch />
                </div>
                <Map className='box' style={styles.map} center={{ lng: 116.404, lat: 39.915 }} mapStyle={{ style: 'midnight' }} zoom="7">
                    <NavigationControl />
                    <MapTypeControl />
                    <ScaleControl />
                    <OverviewMapControl />
                    <MapvLayer data={data} options={{
                        fillStyle: 'rgba(255, 250, 50, 0.8)',
                        shadowColor: 'rgba(255, 250, 50, 1)',
                        shadowBlur: 10,
                        max: 100,
                        size: 50,
                        draw: 'honeycomb',
                        label: {
                            show: true,
                            fillStyle: 'white'
                        },
                        globalAlpha: 1,
                        gradient: {
                            0.125: "rgb(31,98,1)",
                            0.25: "rgb(95,154,4)",
                            0.375: 'rgb(139,227,7)',
                            0.5: 'rgb(218,134,9)',
                            0.625: 'rgb(220,54,6)',
                            0.75: 'rgb(218,2,8)',
                            0.875: "rgb(148,1,2)",
                            1.0: "rgb(92,1,0)"
                        },
                    }} />
                </Map>
            </div>
        )
    }

    componentDidMount() {
        this.constructDataSet();
    }

    constructDataSet = () => {
        let randomCount = 300;
        let data = [];
        let cityCenter = { lng: 116.404, lat: 39.915 };
        while (randomCount--) {
            data.push({
                geometry: {
                    type: 'Point',
                    coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
                },
                count: 30 * Math.random()
            });
        }

        this.setState({ data: data })
    }
}

const styles = {
    container: {
        background: '#FFFFFF',
        height: 600,
        padding: '10px'
    },
    operations: {
        padding: '5px'
    },
    map: {
        width: '100%',
        height: '100%'
    }
}
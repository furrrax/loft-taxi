import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 

class InteractiveMap extends React.Component {

    mapContainer = React.createRef();

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            accessToken: 'pk.eyJ1IjoiZnVycnJheCIsImEiOiJjbDc3bGRodW8wMHl0M3BtYzhzMjE2aml2In0.qafylIxCw40kE-UEegUuIg',
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            height: '500px',
            width: '100%'
        };
        return(
            <div className="map">
                <div style={style} ref={this.mapContainer} />;
            </div>
        )
    }
}

export default InteractiveMap;
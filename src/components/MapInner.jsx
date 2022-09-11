import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 

class InteractiveMap extends React.Component {

    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            accessToken: 'pk.eyJ1IjoiZnVycnJheCIsImEiOiJjbDc3bGRodW8wMHl0M3BtYzhzMjE2aml2In0.qafylIxCw40kE-UEegUuIg',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.3056504, 59.9429126],
            zoom: 10,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return(
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer} />
            </div>
        )
    }
}

export default InteractiveMap;
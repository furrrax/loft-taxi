import {React, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


function InteractiveMap() {

    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: 'pk.eyJ1IjoiZnVycnJheCIsImEiOiJjbDc3bGRodW8wMHl0M3BtYzhzMjE2aml2In0.qafylIxCw40kE-UEegUuIg',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })

        map.on('load', (map, coordinates) => {
            map.flyTo({
                center: coordinates[0],
                zoom: 15
            });
    
            map.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                    }
                },
                layout: {
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#ffc617",
                    "line-width": 8
                }
            });
        });

        return () => map.remove();
    },[]);

    return(
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={mapContainer} />
        </div>
    )
}

/* class InteractiveMap extends React.Component {

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

    export const drawRoute = (map, coordinates) => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    };

    render() {
        return(
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer} />
            </div>
        )
    }
} */

export default InteractiveMap;
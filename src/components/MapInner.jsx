import {React, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useSelector } from "react-redux";
import { selectCoord } from "../redux/selectors/map";

function InteractiveMap() {

    const mapContainer = useRef(null);
    let getCoords = useSelector(selectCoord);

    useEffect(() => {

        if(getCoords.length !== 0) {
            console.log('Страница с картой. Координаты: ' + getCoords)
        } else {
            console.log('Страница с картой. Координаты: еще не получены')
        }
        
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: 'pk.eyJ1IjoiZnVycnJheCIsImEiOiJjbDc3bGRodW8wMHl0M3BtYzhzMjE2aml2In0.qafylIxCw40kE-UEegUuIg',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.3056504, 59.9429126],
            zoom: 10,
        })

        if(getCoords.length !== 0) {
            map.on('load', () => {
                map.flyTo({
                    center: getCoords[0],
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
                                coordinates: getCoords
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
        }

        return () => map.remove();
    },[getCoords]);

    return(
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={mapContainer} />
        </div>
    )
}

export default InteractiveMap;
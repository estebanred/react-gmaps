import React from "react";
import fetch from "isomorphic-fetch";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

export const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAtOR22dFh332IHfRJAocrMCOdv3H084w",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      this.setState({ markers: [] });
    },
    componentDidMount() {
      const url = "https://intec-74d1b.firebaseio.com/users/.json";

      fetch(url)
        .then(res => res.json())
        .then(data => {
          const markerList = [];
          Object.keys(data).forEach(function (key) {
            if (data[key].approved === true) {
              markerList.push(data[key]);
            }
            return null;
          });
          this.setState({ markers: markerList });
        });
    }
  })
)(props => (
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 59.3, lng: 18.1 }}>
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

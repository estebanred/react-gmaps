import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAtOR22dFh332IHfRJAocrMCOdv3H084w",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
		onClick={props.onMapClick}
	>
	</GoogleMap>
	)

export class FormularioMap extends React.Component {

	render() {
		return (
			<MyMapComponent
				onMapClick={this.props.onMapClick}
			/>
		)
	}
}
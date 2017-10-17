import React, { Component } from "react";
import "../App.css";
import { FormularioMap } from "./FormularioMap";
import FormularioFirebase from "./FirebaseForm";

class FormularioContainer extends Component {

	constructor() {
		super();
		this.state = {
			Latitude: "",
			Longitude: ""
		};
	}

	handleMarkerClick = (map) => {
		this.setState({ Latitude: JSON.stringify(map.latLng.lat()), Longitude: JSON.stringify(map.latLng.lng()) });
	}

	render() {
		return (
			<div className="uk-section">
				<div className="uk-container">
					<div className="uk-child-width-1-2 uk-grid">
						<div><FormularioMap onMapClick={this.handleMarkerClick} /></div>
						<div><FormularioFirebase Latitude={this.state.Latitude} Longitude={this.state.Longitude}/></div>
					</div>

				</div>
			</div>
		);
	}
}

export default FormularioContainer;


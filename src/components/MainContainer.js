import React, { Component } from "react";
import "../App.css";
import { MapWithAMarkerClusterer } from "./MainClusterMap";
import { Link } from "react-router-dom";

class MainMapScreen extends Component {
	render() {
		return (
			<div className="uk-section">
				<div className="uk-container">
					<div className="uk-padding-small"><Link to='/graduate-form' className="uk-button uk-button-default">Graduates Form</Link></div>
					<MapWithAMarkerClusterer />
				</div>

			</div>
		);
	}
}

export default MainMapScreen;
import React, { Component } from "react";
import "../App.css";
import { MapWithAMarkerClusterer } from "./MainClusterMap";

class MainMapScreen extends Component {
	render() {
		return (
			<div className="uk-section">
				<div className="uk-container">
					<MapWithAMarkerClusterer />
				</div>
				
			</div>
		);
	}
}

export default MainMapScreen;
import React from "react";
import { Switch, Route } from "react-router-dom";
import MainMapScreen from "./components/MainContainer.js";
import FormularioContainer from "./components/FormularioContainer";

export const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={MainMapScreen} />
			<Route path="/graduate-form" component={FormularioContainer} />
		</Switch>
	</main>
);
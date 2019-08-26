"use strict";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Landing } from "./components/landing"
import { Start } from "./components/start"


const foo = () => (
	<div>Hello Landing</div>
);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Route exact path="/" component={Landing}/>
					<Route exact path="/start" component={Start}/>
				</Fragment>	
			</BrowserRouter>
		)
	}
}

render(<App/>, document.getElementById("mainDiv"));

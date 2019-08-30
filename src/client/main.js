"use strict";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Landing } from "./components/landing"
import { Start } from "./components/start"
import { Report_category } from "./components/report_category"


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
					<Route exact path="/report-category" component={Report_category}/>
				</Fragment>	
			</BrowserRouter>
		)
	}
}

render(<App/>, document.getElementById("mainDiv"));

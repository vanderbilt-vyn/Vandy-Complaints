"use strict";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Start } from "./components/start"
import { Report_category } from "./components/report_category"


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Route exact path="/" component={Start}/>
					<Route exact path="/start" component={Start}/>
					<Route exact path="/report-category" component={Report_category}/>
				</Fragment>	
			</BrowserRouter>
		)
	}
}

render(<App/>, document.getElementById("mainDiv"));

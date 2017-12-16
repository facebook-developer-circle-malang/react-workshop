import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<p className="App-intro" style={style.appIntro}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

const style = {
	appIntro: {
		color: "blue",
		fontSize: 20
	}
};

export default App;

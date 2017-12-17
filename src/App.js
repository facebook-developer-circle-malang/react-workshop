import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CardList from './components/CardWrapper';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<CardList />
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

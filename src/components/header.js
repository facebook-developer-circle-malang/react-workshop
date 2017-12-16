import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className="header" style={styles.headerStyle}>
				<p style={styles.headerTitle}>Pokedex</p>
			</div>
		);
	}
}

const styles = {
	headerStyle: {
		display: "flex",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 13,
		paddingBottom: 13,
		borderBottom: "1px solid",
		borderColor: "#BDBDBD",
		backgroundColor: "#fff"
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: "500"
	}
};

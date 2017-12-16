import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

export default class Card extends Component {
	render() {
		return (
			<Card>
				<CardImg
					top
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		);
	}
}

const styles = {
	cadStyle: {
		display: "flex",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 13,
		paddingBottom: 13,
		borderBottom: "1px solid",
		borderColor: "#BDBDBD",
		backgroundColor: "#fff"
	}
};

import React, { Component } from "react";
import { withApollo, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button
} from "reactstrap";

import CardModal from './CardModal';

const pokemonQuery = gql`
	query getDetailPokemon($slug: String!) {
		getPokemon(slug: $slug) {
			name
			data {
				name
				value
			}
			stats {
				name
				value
			}
		}
	}
`;

class CardList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
			detailPokemon: {},
		}
	}

	toggleModal = () => {
		this.props.client.query({
			query: pokemonQuery,
			variables: {
				slug: this.props.name.toLowerCase(),
			}
		})
		.then(res => {
			this.setState({ 
				modalIsOpen: !this.state.modalIsOpen,
				detailPokemon: res.data.getPokemon
			});
		})
	}

	render() {
		if (this.props.loading) {
			return <span>Loading bos...</span>
		}

		return (
			<div>
				<Card style={styles.cardStyle}>
					<CardImg
						top
						width="100%"
						src={this.props.avatar}
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>{this.props.name}</CardTitle>
						<CardText>{this.props.desc}</CardText>
						<Button onClick={this.toggleModal}>Detail</Button>
					</CardBody>
				</Card>
				<CardModal 
					modal={this.state.modalIsOpen}
					toggle={this.toggleModal}
					detailPokemon={this.state.detailPokemon}
				/>
			</div>
		);
	}
}

const styles = {
	cardStyle: {
		width: 318,
		padding: 20,
	}
};

export default withApollo(CardList);
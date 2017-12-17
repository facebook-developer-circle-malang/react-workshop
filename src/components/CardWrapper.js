import React, { Component } from "react";
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import {CardGroup, Row, Col} from 'reactstrap'; 
import Card from './Card';

const getAllPokemon = gql`
  query getAllPokemonFromSomewhere {
    allPokemon(offset: 0) {
      id
      name
      desc
      avatar
    }
  }
`;

class CardWrapper extends Component {
	render() {
    const { allPokemon, loading } = this.props.data;

    if (loading) {
      return <span>Loading bos....</span>
    }

		return (
      <CardGroup>
        <Row>
          {allPokemon.map(pokemon => (
            <Col md={3} className="d-flex justify-content-center p-2">
              <Card {...pokemon} loading={loading} />
            </Col>
          ))}
        </Row>
      </CardGroup>
		)
	}
}

export default graphql(getAllPokemon)(CardWrapper);
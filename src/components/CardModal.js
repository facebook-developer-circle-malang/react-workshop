import React, { Component } from 'react';
import { 
	Button, 
	Modal, 
	Row,
	ModalHeader, 
	ModalBody, 
	ModalFooter 
} from 'reactstrap';

class CardModal extends Component {
	render() {
		// pokemondata => this.props.detailPokemon.data => Array<OBject>
		// pokemon stats => this.props.detailPokemon.stats => Array<Object>
		const { detailPokemon } = this.props;

		if (!Object.keys(detailPokemon).length) return null;

		return (
			<div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{detailPokemon.name}</ModalHeader>
					<ModalBody>
						<Row>
							<h3>Pokemon Data:</h3>
							<Row>
								<ul>
									{detailPokemon.data.map(data => [
										<li>{data.name}:{data.value}</li>
									])}
								</ul>
							</Row>
						</Row>
						<Row>
							<h3>Pokemon Stats:</h3>
							<Row>
								<ul>
									{detailPokemon.stats.map(data => (
										<li>{data.name}:{data.value}</li>
									))}
								</ul>
							</Row>
						</Row>
					</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
		)
	}
}

export default CardModal;
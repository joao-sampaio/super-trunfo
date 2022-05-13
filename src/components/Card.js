import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="card">
        <h1>Pré-visualização</h1>
        <h2 data-testid="name-card">{cardName}</h2>
        {
          cardImage !== '' && <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        }
        <h3 data-testid="description-card">{cardDescription}</h3>
        <h4 data-testid="attr1-card">{cardAttr1}</h4>
        <h4 data-testid="attr2-card">{cardAttr2}</h4>
        <h4 data-testid="attr3-card">{cardAttr3}</h4>
        <p data-testid="rare-card">{cardRare}</p>
        { cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;

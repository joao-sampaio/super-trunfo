import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards } = this.props;
    const deck = cards.map((c) => (<Card
      key={ c.cardName }
      cardName={ c.cardName }
      cardDescription={ c.cardDescription }
      cardAttr1={ c.cardAttr1 }
      cardAttr2={ c.cardAttr2 }
      cardAttr3={ c.cardAttr3 }
      cardImage={ c.cardImage }
      cardRare={ c.cardRare }
      cardTrunfo={ c.cardTrunfo }
    />));
    return (
      <div className="deck">
        { deck }
      </div>
    );
  }
}

Deck.propTypes = {
  cards: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Deck;

import React from 'react';
import CreateCardForm from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handeChange = this.handeChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.handeClick = this.handeClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: this.isSaveButtonDisabled,
      onInputChange: this.handeChange,
      onSaveButtonClick: this.handeClick,
      cards: [],
    };
  }

  handeChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  isSaveButtonDisabled() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;
    const maxAttr = 90;
    const maxTotalAttr = 210;
    const save = !((
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && parseInt(cardAttr1, 10) <= maxAttr
      && parseInt(cardAttr2, 10) <= maxAttr
      && parseInt(cardAttr3, 10) <= maxAttr
      && parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr2, 10) >= 0
      && parseInt(cardAttr3, 10) >= 0
      && parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10) <= maxTotalAttr
    ));

    return save;
  }

  handeClick() {
    const card = { ...this.state };
    delete card.cards;
    delete card.hasTrunfo;
    delete card.isSaveButtonDisabled;
    delete card.onInputChange;
    delete card.onSaveButtonClick;
    console.log(card.cardTrunfo);
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [...prev.cards, card] }));
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      cards } = this.state;
    return (
      <div>
        <div className="body">
          {console.log(this.state)}
          <CreateCardForm
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled() }
            onInputChange={ onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
          />
          <div className="preview">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <h1>Todas as cartas:</h1>
        <Deck cards={ cards } />
        {/* <div className="deck">
        </div> */}
      </div>
    );
  }
}

export default App;

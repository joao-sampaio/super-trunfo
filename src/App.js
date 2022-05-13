import React from 'react';
import CreateCardForm from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handeChange = this.handeChange.bind(this);
    this.handeClick = this.handeClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.handeChange,
      onSaveButtonClick: this.handeClick,
    };
  }

  handeChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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
      && cardAttr1 <= maxAttr
      && cardAttr2 <= maxAttr
      && cardAttr3 <= maxAttr
      && cardAttr1 > 0
      && cardAttr2 > 0
      && cardAttr3 > 0
      && cardAttr1 + cardAttr2 + cardAttr3 <= maxTotalAttr
    ));
    this.setState({
      [name]: value,
      isSaveButtonDisabled: save,
    });
    console.log(this.state);
  }

  handeClick({ target }) {
    console.log(this.state);
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
      onSaveButtonClick } = this.state;
    console.log(isSaveButtonDisabled);
    return (
      <div className="body">
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
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
    );
  }
}

export default App;

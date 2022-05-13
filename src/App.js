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
    // let value
    // if (target.type === 'checkbox') {
    //   value = target.checked
    // } else if (target.type === 'button') {
    //   const {
    //     cardName,
    //     cardDescription,
    //     cardAttr1,
    //     cardAttr2,
    //     cardAttr3,
    //     cardImage,
    //     cardRare } = this.state
    //   value = (cardName !== '' && 
    //   cardDescription !== '' && 
    //   cardImage !== '' && 
    //   cardRare !== '' && 
    //   cardAttr1 <= 90 && 
    //   cardAttr2 <= 90 && 
    //   cardAttr3 <= 90 && 
    //   cardAttr1 > 0 && 
    //   cardAttr2 > 0 && 
    //   cardAttr3 > 0 && 
    //   cardAttr1 + cardAttr2 + cardAttr3 <= 210
    //   ) ? true : false
    //   console.log(value)
    // } else {
    //   value = target.value
    // }

    // cardName !== '' && 
    // cardDescription !== '' && 
    // cardImage !== '' && 
    // cardRare !== '' && 
    // cardAttr1 <= 90 && 
    // cardAttr2 <= 90 && 
    // cardAttr3 <= 90 && 
    // cardAttr1 > 0 && 
    // cardAttr2 > 0 && 
    // cardAttr3 > 0 && 
    // cardAttr1 + cardAttr2 + cardAttr3 <= 210
    
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state
    const save = ( 
      cardName !== '' && 
      cardDescription !== '' && 
      cardImage !== '' && 
      cardAttr1 <= 90 && 
      cardAttr2 <= 90 && 
      cardAttr3 <= 90 && 
      cardAttr1 > 0 && 
      cardAttr2 > 0 && 
      cardAttr3 > 0 && 
      cardAttr1 + cardAttr2 + cardAttr3 <= 210
    ) ? false : true
    this.setState({
      [name]: value,
      ['isSaveButtonDisabled']: save
    });
    console.log(this.state)
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
    console.log(isSaveButtonDisabled)
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

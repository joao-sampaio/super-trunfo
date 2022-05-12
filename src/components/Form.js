import React from 'react';

class CreateCardForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
    };

    this.handeChange = this.handeChange.bind(this);
  }

  handeChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    target.value = value;
    console.log(this.state);
  }

  render() {
    return (
      <form>
        Adicionar nova carta
        <label htmlFor="name">
          Nome:
          <input
            className="largeInput"
            id="name"
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            rows={ 5 }
            cols={ 5 }
            id="description"
            name="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1:
          <input
            className="smallInput"
            id="attr1"
            name="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            className="smallInput"
            id="attr2"
            name="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            className="smallInput"
            id="attr3"
            name="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Imagem:
          <input
            className="attr"
            id="image"
            name="image"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          Raridade:
          <select className="smallInput" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo:
          <input id="trunfo" name="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>

        <section>
          <button type='button' name="save" data-testid="save-button">Salvar</button>
          <button type='reset' name="reset">Limpar</button>
        </section>
      </form>
    );
  }
}

export default CreateCardForm;

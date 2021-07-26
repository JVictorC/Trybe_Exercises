import React from 'react';
import InputText from './ComponentInput';
import ComboBox from './ComboBoxStates';
import RadioBox from './RadioBox';
export default class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereço: '',
      cidade: '',
      states: '',
      moradia: '',
    }
    this.hadleChange = this.hadleChange.bind(this)
  }

  hadleChange({ target }) {
    this.setState({
      [target.name]: target.value
    })

  }

  render() {
    return (
      <form>
        <fieldset className="border border-light border-2 rounded m-2">
          <InputText name="nome" label="Nome" maxWord={40} hadleChange={this.hadleChange} />

          <InputText name="email" label="Email" maxWord={50} hadleChange={this.hadleChange} />

          <InputText name="cpf" label="Cpf" maxWord={11} hadleChange={this.hadleChange} />

          <InputText name="endereço" label="Endereço" maxWord={200} hadleChange={this.hadleChange} />

          <InputText name="cidade" label="Cidade" maxWord={28} hadleChange={this.hadleChange} />

          <ComboBox hadleChange={this.hadleChange} />

          <RadioBox hadleChange={this.hadleChange} />
        </fieldset>
      </form>
    );
  }
}
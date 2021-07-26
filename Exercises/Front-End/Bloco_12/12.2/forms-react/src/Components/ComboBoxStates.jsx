import React, { Component } from 'react';
import objcStates from './DatStates'

export default class ComboBox extends Component {
  render() {
    const siglas = Object.keys(objcStates)
    const {hadleChange} = this.props
    return (
      <label htmlFor="states" className="form-label "> Escolha um State:
        <select name="states" id="states" className="form-select" onChange={hadleChange}>
          {
            siglas.map((sigla, index) => (
              <option value={sigla} key={index}>
                {sigla}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}
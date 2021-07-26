import React, { Component } from 'react';

export default class RadioBox extends Component {
  render() {
    const { hadleChange } =this.props
    return (
      <div>
      <label> Moradia:
      <label htmlFor="ap" className="form-label"> Apartamento
      <input type="radio" onChange={hadleChange} name="moradia" id="ap" value="Apartamento" />
      </label>
      <label htmlFor="cs" className="form-label">Casa
        <input type="radio" onChange={hadleChange} name='moradia' id='cs'value="Casa"/>
      </label>
      </label>
      </div>
    );
  }
}
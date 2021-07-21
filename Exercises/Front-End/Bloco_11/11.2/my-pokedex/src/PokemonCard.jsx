import React from "react";

class CardPokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit: unit },
      image,
      moreInfo,
    } = this.props.pokemon;

    return (
      <section className="card">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
          Average Weight: {value} {unit}
          </p>
        </div>
        <img src={image} alt={moreInfo} />
      </section>
    );
  }
}

export default CardPokemon;

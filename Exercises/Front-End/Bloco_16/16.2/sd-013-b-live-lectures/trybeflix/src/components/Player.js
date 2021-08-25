import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { selectMovie, selectCategory } = this.props;
    return (
      <div>
        <h1>
          {selectMovie.title}
        </h1>
        <h3>
          {selectCategory}
          {' '}
          -
          {' '}
          {selectMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ selectMovie.link }
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectMovie: state.movieReducer.selectMovie,
  selectCategory: state.movieReducer.selectCategory,
});

export default connect(mapStateToProps)(Player);

import React from 'react';
import { connect } from 'react-redux';
import selectMovie from '../actions';

class Sidebar extends React.Component {
  render() {
    const { movies, takeMovie } = this.props;
    return (
      <aside>
        {
          movies.map((movie) => (
            <div key={ movie.id }>
              <h3>{movie.name}</h3>
              <ul>
                {
                  movie.movies.map((movi) => (
                    <li key={ movi.id }>
                      {movi.title}
                      {' '}
                      was released in
                      {' '}
                      {movi.released}
                      <button
                        type="button"
                        onClick={ () => takeMovie(movi, movie.name) }
                      >
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.categories,
});
const mapDispatchToProps = (dispatch) => ({
  takeMovie: (movie, category) => dispatch(selectMovie(movie, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

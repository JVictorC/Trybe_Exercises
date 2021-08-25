const SELECTED_MOVIE = 'SELECTED_MOVIE';

const selectMovie = (movie, category) => ({ type: SELECTED_MOVIE, movie, category });

export default selectMovie;

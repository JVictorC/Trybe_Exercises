import categories from '../data';

const INITIAL_STATE = {
  categories,
  selectMovie: categories[0].movies[0],
  selectCategory: categories[0].name,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, movie, category } = action;
  switch (type) {
  case 'SELECTED_MOVIE':
    return { ...state, selectMovie: movie, selectCategory: category };
  default:
    return state;
  }
};

export default movieReducer;

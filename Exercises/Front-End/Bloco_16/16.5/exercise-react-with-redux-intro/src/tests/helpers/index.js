import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../redux/index'


const renderWithRedux = (component, {InitialState, store = createStore(rootReducer, InitialState)} = {}) => {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>), store
  }
}

export default renderWithRedux
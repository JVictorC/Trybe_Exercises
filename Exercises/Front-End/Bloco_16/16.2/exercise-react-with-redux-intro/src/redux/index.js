import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const changeSignalInitial = {
  color: 'red'
}

const moveCarInitialInitial = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
}


const trafficLight = (state = changeSignalInitial, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_SIGNAL':
      return { ...state, color: payload }
    default:
      return state
  }
}

const moveCar = (state = moveCarInitialInitial, action) => {
  const { type, car, side } = action
  switch (type) {
    case 'MOVE_CAR':
      return {...state, [car]: side }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  moveCar,
  trafficLight
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

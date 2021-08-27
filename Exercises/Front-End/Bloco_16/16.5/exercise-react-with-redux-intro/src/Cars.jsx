import React from 'react';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import {moveCar as moveCarAction} from './redux/actionCreators'


function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={() => moveCar('redCar', !redCar)}>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={() => moveCar('blueCar', !blueCar)}>Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={() => moveCar('yellowCar',!yellowCar)}>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.moveCar.redCar,
  blueCar: state.moveCar.blueCar,
  yellowCar: state.moveCar.yellowCar,
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (color, side) => dispatch(moveCarAction(color,side))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
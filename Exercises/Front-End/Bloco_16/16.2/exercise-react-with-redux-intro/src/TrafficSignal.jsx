import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators'

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        <button onClick={() => changeSignal('green')} type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(changeSignal(color))
})

const mapStateToProps = (state) => ({
  signalColor: state.trafficLight.color
})

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)
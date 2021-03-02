import logo from './logo.svg';
import ClockBar from './components/ClockBar'

import './App.css';

function App() {
  const hours = { tens: [0,1,2], ones: [0,1,2,3,4,5,6,7,8,9] };
  const minutes = {tens: [0,1,2], ones: [0,1,2,3,4,5,6,7,8,9]};
  return (
    <div className="container">
      <div className="box">
        <div className="middle-mark"></div>
        <ClockBar digits={[0,1,2]} id="hour_tens"></ClockBar>
        <ClockBar digits={[0,1,2,3,4,5,6,7,8,9]} id="hours_ones"></ClockBar>
        <ClockBar digits={[0,1,2,3,4,5]} id="minutes_tens"></ClockBar>
        <ClockBar digits={[0,1,2,3,4,5,6,7,8,9]} id="minutes_ones"></ClockBar>
        <ClockBar digits={[0,1,2,3,4,5]} id="seconds_tens"></ClockBar>
        <ClockBar digits={[0,1,2,3,4,5,6,7,8,9]} id="seconds_ones"></ClockBar>
        
      </div>
    </div>
  );
}

export default App;

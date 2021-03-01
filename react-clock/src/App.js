import logo from './logo.svg';
import './App.css';

function App() {
  const hours = { tens: [0,1,2], ones: [0,1,2,3,4,5,6,7,8,9] };
  const minutes = {tens: [0,1,2], ones: [0,1,2,3,4,5,6,7,8,9]};
  return (
    <div className="container">
      <div className="box">
        <div className="clock-stick">
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
        <div className="clock-stick"></div>
        <div className="clock-stick"></div>
        <div className="clock-stick"></div>
        <div className="clock-stick"></div>
        <div className="clock-stick"></div>

      </div>
    </div>
  );
}

export default App;

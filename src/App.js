import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0);

  
  const onClickPlus = () => {
      setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
}



  return (
    <div className="App">
      <div>
        <h1 className="title">Counter:</h1>
        <h1 className="number">{count}</h1>
        <button className="plus" onClick={onClickPlus}>plus</button>
        <button className="minus" onClick={onClickMinus}>minus</button>
      </div>
    </div>
  );
}

export default App;

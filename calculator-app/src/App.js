import React, { useState } from 'react'; 
import './App.css';

function App() {

  const [userInput, setUserInput] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(result + parseInt(userInput));
    setUserInput(0);
  }

  const handleSubtraction = () => {
    if(result === 0){
      setResult(parseInt(userInput));
    }else{
      setResult(result - parseInt(userInput));
    }
    setUserInput(0);
  }

  const handleMultiplication = () => {
    if(result === 0){
      setResult(parseInt(userInput));
    }else{
      setResult(result * parseInt(userInput));
    }
    setUserInput(0);
  }

  const handleDivision = () => {
    if(result === 0){
      setResult(parseInt(userInput));
    }else{
      setResult(result / parseInt(userInput));
    }
    setUserInput(0);
  }

  const resetResult = () => {
    setUserInput(0);
    setResult(0);
  }
  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p>Result: {result}</p>
      <input type="number" value={userInput}
      onChange={(e) => setUserInput(e.target.value)}></input>
      <div className="button-section">
        <button id="add" onClick={handleAddition}>add</button>
        <button id="subtract" onClick={handleSubtraction}>subtract</button>
        <button id="multiply" onClick={handleMultiplication}>multiply</button>
        <button id="divide" onClick={handleDivision}>divide</button>
        <button id="reset-result" onClick={resetResult}>reset result</button>
      </div>
    </div>
  );
}

export default App;

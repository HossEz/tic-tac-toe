import { useState } from 'react';
import './App.css';

function Square({value, handleInput}){
  // const [value, setValue] = useState()
  const handleClick = ()=>{
    // setValue("X")
    console.log(value)
  }
  return <button className='square' value={value} onClick={handleInput}>{value}</button>
}

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i)=>{
    const nextSquare = squares.slice()
    nextSquare[i] = "X"
    setSquares(nextSquare)
  }

  return (    
    <div className='board'>
      {squares.map((square, i) => (
        <Square key={i} value={square} handleInput={()=>handleClick(i)} />
      ))}
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <h3>Det er X sin tur</h3>
      <Board />
    </div>
  );
}
export default App;

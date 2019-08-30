import React from 'react';
import logo from './logo.svg';
import './App.css';
import helpers from './helpers';

const Star = () => {
  const stars = 6;
  return (
    <div className="game">
      <div className="body">
        <div className="left">
          {
            helpers.helper1(stars).map(starId =>
              <div key={starId} className="star" />
            )
          }

        </div>
        <div className="right"><button className="number">9</button>
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Star></Star>
    </div>
  );
}

export default App;

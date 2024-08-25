import React from 'react';
import Dice from './Dice';

const NumerEqual = ({ win, rollDice, dice1, dice2, dice3 }) => {
  return (
    <div>
      {' '}
      <div className="first-container">
        <h2>
          Roll Same <span>{win && '- You win!'}</span>
        </h2>
        <div className="roll-4times">
          <Dice number={dice1} />
          <Dice number={dice2} />
          <Dice number={dice3} />
        </div>
        <button onClick={rollDice}>Re-Roll</button>
      </div>
    </div>
  );
};

export default NumerEqual;

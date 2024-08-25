import React from 'react';
import Dice from './Dice';

const Sum4 = ({ win, rollDice, dice1, dice2 }) => {
  return (
    <div className="first-container">
      <h2>
        Roll Exactly 4 <span>{win && '- You win!'}</span>
      </h2>
      <div className="roll-4times">
        <Dice number={dice1} />
        <Dice number={dice2} />
      </div>
      <button onClick={rollDice}>Re-Roll</button>
    </div>
  );
};

export default Sum4;

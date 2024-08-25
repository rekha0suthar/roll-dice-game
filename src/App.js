import { useState } from 'react';
import Sum4 from './components/Sum4';
import NumerEqual from './components/NumerEqual';

// Utility function to roll dice
const rollDice = (numDice = 2) => {
  return Array.from(
    { length: numDice },
    () => Math.floor(Math.random() * 6) + 1
  );
};

function App() {
  // Combined state for all dice and win conditions
  const [dice, setDice] = useState({
    dice1: 1,
    dice2: 2,
    d1: 1,
    d2: 2,
    d3: 3,
  });

  // Roll dice and update state
  const rollDice1 = () => {
    const [randNum1, randNum2] = rollDice();
    setDice((prevDice) => ({
      ...prevDice,
      dice1: randNum1,
      dice2: randNum2,
    }));
  };

  const rollDice2 = () => {
    const [randNum1, randNum2, randNum3] = rollDice(3);
    setDice((prevDice) => ({
      ...prevDice,
      d1: randNum1,
      d2: randNum2,
      d3: randNum3,
    }));
  };

  // Calculate win conditions directly in the render logic
  const win1 = dice.dice1 + dice.dice2 === 4;
  const win2 = dice.d1 === dice.d2 && dice.d1 === dice.d3;

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <Sum4
        win={win1}
        rollDice={rollDice1}
        dice1={dice.dice1}
        dice2={dice.dice2}
      />
      <NumerEqual
        win={win2}
        rollDice={rollDice2}
        dice1={dice.d1}
        dice2={dice.d2}
        dice3={dice.d3}
      />
    </div>
  );
}

export default App;

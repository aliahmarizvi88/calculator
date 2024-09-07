import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const label = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    'x',
    '/',
    '=',
    'AC',
    'C',
  ];
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      const result = eval(input);
      setInput(result.toString());
    } else if (value === 'C') {
      setInput('0');
    } else if (value === 'AC') {
      setInput((prveInput) => prveInput.slice(0, -1));
    } else {
      if (input === '0') {
        setInput('');
      }
      setInput((prveInput) => prveInput + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display ">{input}</div>
        <div className="keypad">
          {label.map((value) => (
            <button
              className="buttons btn btn-outline-primary"
              key={value}
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

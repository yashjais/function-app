import { useState, useEffect } from 'react';
import Function from './component/Function'

import { FUNCTIONS } from './constants';

import { evaluate } from 'mathjs'

function App() {
  const [items, setItems] = useState(FUNCTIONS);
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  useEffect(() => {
    if (inputValue && items.length) {
      const newResult = calculateValue();
      setOutputValue(newResult);
    }
  }, [inputValue, items]);

  const sanitizeValue = (value) => {
    const validPattern = /^[0-9x+\-*/^().]+$/;
    if (!validPattern.test(value)) {
      return false;
    }

    return true;
  };

  const calculateValue = () => {
    try {
      let currentFunction = items.find(f => f.isFirst);
      if (!currentFunction) return 0;

      let result = inputValue;

      while (currentFunction) {
          result = evaluate(currentFunction.equation, { x: result });

          if (currentFunction.isLast) break;
          currentFunction = items.find(f => f.number === currentFunction.nextFunction);
          if (!currentFunction) break;
      }

      return result;
    } catch (err) {
      console.error('Please provide a valid Equation');
    }
  };

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const handleEquationChange = (number, value) => {
    const isValueValid = sanitizeValue(value);

    if (isValueValid) {
      setItems(prevValue => (
        prevValue.map((val) => (
          val.number === number ? ({
            ...val,
            equation: value,
        }) : val))
      ))
    }
  };

  return (
    <div className="m-2.5 relative flex flex-wrap gap-24 justify-center">
      {
        items.map((item) => (
          <Function
            {...item}
            key={item.number}
            input={inputValue}
            handleEquationChange={handleEquationChange}
            outputValue={outputValue}
            onInputChange={onInputChange}
          />
        ))
      }
    </div>
  );
}

export default App;

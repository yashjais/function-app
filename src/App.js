import { useState } from 'react';
import Function from './component/Function'

const functions = [
  {
    number: 1,
    equation: 'x^2',
    nextFunction: 2,
    isFirst: true,
  },
  {
    number: 2,
    equation: '2x+4',
    nextFunction: 4,
  },
  {
    number: 3,
    equation: 'x^2+20',
    nextFunction: 4,
    isLast: true,
  },
  {
    number: 4,
    equation: 'x-2',
    nextFunction: 5,
  },
  {
    number: 5,
    equation: 'x/2',
    nextFunction: 3,
  }
]

function App() {
  const [items, setItems] = useState(functions);
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  const sanitizeValue = (value) => {
    console.log('sanitizeValue');
    return true;
  };

  const calculateValue = () => {
    console.log('calculate value');
  };

  const onInputChange = (value) => {
    setInputValue(value);
    calculateValue();
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
      calculateValue();
    }
  };

  return (
    <div className="m-2.5 flex flex-wrap gap-24 justify-center">
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

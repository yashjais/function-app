import Function from './component/Function'

function App() {
  return (
    <div className="App">
      <Function
        number={1}
        nextFunction={2}
        isStarting
      />
      <Function
        number={2}
        nextFunction={4}
      />
      <Function
        number={3}
      />
      <Function
        number={4}
        nextFunction={5}
      />
      <Function
        number={5}
        nextFunction={3}
        isFinal
      />
    </div>
  );
}

export default App;

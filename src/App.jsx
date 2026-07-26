import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Wojciech" message="Hello there, " emoji="✋🏻" />
      <Hello name="Tommy" message="Hello, " emoji="✌🏾" />
    </div>
  );
}

export default App;

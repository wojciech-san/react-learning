import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Wojciech",
    message: "Hello there, ",
    emoji: "✋🏻",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
    </div>
  );
}

export default App;

import ConditionalComponent from "./components/ConditionalComponent";
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
      <ConditionalComponent />
    </div>
  );
}

export default App;

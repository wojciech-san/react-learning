import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const person = {
    name: "Wojciech",
    message: "Hello there, ",
    emoji: "✋🏻",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;

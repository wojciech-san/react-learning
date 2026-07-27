import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["banana", "apple", "kiwi", "orange", "grape"];
  const fruits = [
    {
      name: "banana",
      price: 10,
      emoji: "🍌",
    },
    {
      name: "apple",
      price: 15,
      emoji: "🍎",
    },
    {
      name: "kiwi",
      price: 20,
      emoji: "🥝",
    },
    {
      name: "orange",
      price: 12,
      emoji: "🍊",
    },
    {
      name: "grape",
      price: 18,
      emoji: "🍇",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["banana", "apple", "kiwi", "orange", "grape"];
  const fruits = [
    {
      name: "banana",
      price: 10,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "apple",
      price: 15,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: "kiwi",
      price: 20,
      emoji: "🥝",
      soldout: false,
    },
    {
      name: "orange",
      price: 12,
      emoji: "🍊",
      soldout: true,
    },
    {
      name: "grape",
      price: 18,
      emoji: "🍇",
      soldout: true,
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {price > 15 ? (
        <li>
          {name} - ${price} {emoji}
        </li>
      ) : (
        ""
      )}
    </>
  );
}

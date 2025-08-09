import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="item-card">
      <h2 className="item-card__title">{item.name}</h2>
      <img className="item-card__img" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;

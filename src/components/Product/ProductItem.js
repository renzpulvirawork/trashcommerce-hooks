export default function ProductItem({ name, category, price }) {
  return (
    <div className="Product-item">
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

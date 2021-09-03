import * as S from "./Products.styles";

export default function ProductItem({ name, category, price }) {
  return (
    <S.ProductItem>
      <div className="product-image"></div>
      <h3>{name}</h3>
      <div className="category-cont">
        <span>Category:</span>
        <p>{category}</p>
      </div>
      <div className="price-cont">
        <div>
          <span>Price:</span>
          <p>{price}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </S.ProductItem>
  );
}

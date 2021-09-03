import ProductItem from "./ProductItem";
import * as S from "./Products.styles";

export default function Products({ filterBy, priceBy, products }) {
  return (
    <S.ProductGrid>
      {products.map((item, ind) => (
        <ProductItem
          key={ind}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </S.ProductGrid>
  );
}

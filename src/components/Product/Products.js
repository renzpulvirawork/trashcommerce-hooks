import ProductItem from "./ProductItem";

export default function Products({ filterBy, priceBy, products }) {
  return (
    <div>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
}

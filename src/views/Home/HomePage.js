import { useState } from "react";

import * as SApp from "../../App.styles";
import * as S from "./Homepage.styles";
import Products from "../../components/Product/Products";
import { SortCategory, SortPrice } from "../../components/layout/Filters";

export default function HomePage() {
  const dummyProducts = [
    {
      name: "Pixel 3A",
      category: "Mobiles",
      price: "150",
    },
    {
      name: "Pixel 5",
      category: "Mobiles",
      price: "200",
    },
    {
      name: "TM680",
      category: "Keyboards",
      price: "99.99",
    },
    {
      name: "Logitech MX 3",
      category: "Mice",
      price: "119.99",
    },
    {
      name: "Royal Kludge 987",
      category: "Keyboards",
      price: "75",
    },
    {
      name: "Logitech Silent Mice",
      category: "Mice",
      price: "30",
    },
    {
      name: "Samsung J7 Core",
      category: "Mobiles",
      price: "120",
    },
  ];

  const [filterOptions, setFilterOptions] = useState({
    category: [],
    price: [],
  });

  const handleFilterCategory = (filter) => {
    // let prevCat = [...filterOptions.category]
    console.log(filter);
  };

  const handleFilterPrices = (filter) => {
    console.log(filter);
  };

  return (
    <SApp.GlobalContainer style={{ padding: "3em 0 6em 0" }}>
      <S.UIGrid>
        {/* Sidebar Column */}
        <div className="Sidebar">
          <SortCategory handleFilter={handleFilterCategory} />
          <SortPrice handleFilter={handleFilterPrices} />
        </div>

        {/* Products Column */}
        <Products
          products={dummyProducts}
          filterByCategory={filterOptions.category}
          filterByPrice={filterOptions.price}
        />
      </S.UIGrid>
    </SApp.GlobalContainer>
  );
}

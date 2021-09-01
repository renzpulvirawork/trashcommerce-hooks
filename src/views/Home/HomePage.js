import * as SApp from "../../App.styles";
import * as S from "./Homepage.styles";
import Products from "../../components/Product/Products";

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

  return (
    <SApp.GlobalContainer style={{ padding: "3em 0 6em 0" }}>
      <S.UIGrid>
        {/* Sidebar Column */}
        <div className="Sidebar">
          <h3>Categories</h3>
          <ul style={{ padding: "0", margin: "0", listStyle: "none" }}>
            <li>
              <label htmlFor="mobiles">
                <input name="mobiles" type="checkbox" />
                &nbsp; Mobiles
              </label>
            </li>
            <li>
              <label htmlFor="keyboards">
                <input name="keyboards" type="checkbox" />
                &nbsp; Keyboards
              </label>
            </li>
            <li>
              <label htmlFor="mice">
                <input name="mice" type="checkbox" />
                &nbsp; Mice
              </label>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <Products products={dummyProducts} />
      </S.UIGrid>
    </SApp.GlobalContainer>
  );
}

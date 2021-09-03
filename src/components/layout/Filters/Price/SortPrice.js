import { useState } from "react";
import * as S from "./SortPrice.styles";
import { updateCheckState } from "../../../../utils/helpers/checkbox.helpers";

export const SortPrice = () => {
  const priceFilters = [
    {
      name: "high-to-low",
    },
    {
      name: "low-to-high",
    },
  ];

  const [checkboxPrice, setCheckboxPrice] = useState(
    new Array(priceFilters.length).fill(false)
  );

  const handleChecked = (position) => {
    const updatedCheckedState = updateCheckState(position, checkboxPrice);
    setCheckboxPrice(updatedCheckedState);
  };

  return (
    <S.Prices>
      <ul style={{ padding: "0", margin: "0", listStyle: "none" }}>
        {priceFilters.map((item, index) => {
          return (
            <li key={index}>
              <input
                name={item.name}
                id={`custom-checked-${item.name}`}
                type="checkbox"
                onChange={() => handleChecked(index)}
              />
              <label htmlFor={`custom-checked-${item.name}`}>
                &nbsp;{item.name}
              </label>
            </li>
          );
        })}
      </ul>
    </S.Prices>
  );
};

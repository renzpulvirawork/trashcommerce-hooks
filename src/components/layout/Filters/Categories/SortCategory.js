import React, { useEffect, useState } from "react";
import { updateCheckState } from "../../../../utils/helpers/checkbox.helpers";

import * as S from "./SortCategory.styles";

export const SortCategory = ({ handleFilter }) => {
  const dummyCategories = [
    {
      name: "Mobiles",
    },
    {
      name: "Keyboards",
    },
    {
      name: "Mice",
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(dummyCategories.length).fill(false)
  );

  const handleChecked = (position) => {
    const updatedCheckedState = updateCheckState(position, checkedState);
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    const copyArr = [...dummyCategories];
    copyArr.map((arr, index) => (arr.isChecked = checkedState[index]));
    handleFilter(copyArr);
  }, [checkedState]);

  return (
    <S.Categories>
      <h3>Categories</h3>
      <ul style={{ padding: "0", margin: "0", listStyle: "none" }}>
        {dummyCategories.map((item, index) => {
          return (
            <li key={index}>
              <input
                name={item.name}
                id={`custom-checked-${item.name}`}
                type="checkbox"
                defaultChecked={checkedState[index]}
                value={item.name}
                onChange={() => handleChecked(index)}
              />
              <label htmlFor={`custom-checked-${item.name}`}>
                &nbsp;{item.name}
              </label>
            </li>
          );
        })}
      </ul>
    </S.Categories>
  );
};

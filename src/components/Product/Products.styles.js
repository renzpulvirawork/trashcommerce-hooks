import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 30px;
`;

export const ProductItem = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 15px;

  .product-image {
    border-radius: 8px;
    width: 100%;
    height: 150px;
    background: #c78577;
  }

  h3 {
    margin: 12px 0 15px 0;
    font-weight: 700;
    font-size: 16px;
  }

  .price-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    button {
      align-self: flex-end;
      background: #dd9788;
      border: 1px solid transparent;
      border-radius: 5px;
      color: #fff;
      padding: 5px 12px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: #c78577;
      }
    }
  }

  span {
    font-size: 12px;
    color: #a69292;
  }

  .category-cont {
    margin-bottom: 15px;

    p {
      margin: 5px 0;
    }
  }
`;

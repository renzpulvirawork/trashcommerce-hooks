import styled from "styled-components";

export const Prices = styled.div`
  border-radius: 8px;
  margin-bottom: 4em;

  h3 {
    border-bottom: 1px solid #ececec;
    padding-bottom: 8px;
    margin-bottom: 15px;
  }

  ul li {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  label {
    cursor: pointer;
  }
`;

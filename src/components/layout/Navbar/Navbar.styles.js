import styled from "styled-components";

export const Navbar = styled.div`
  background: #fff;
  border-bottom: 1px solid #cfcfcf;

  & > div {
    padding: 20px 0;
    align-items: center;
    display: flex;

    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  font-family: "Inter";
  font-weight: 800;
  letter-spacing: 0.4em;
  font-size: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    font-size: 30px;
  }
`;

export const NavLinks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Cart = styled.button`
  border: 1px solid #98e2e1;
  background: #adfaf9;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 5px 8px;
  cursor: pointer;

  svg {
    color: #222;
    margin-right: 5px;
  }

  span {
    color: #222;
  }
`;

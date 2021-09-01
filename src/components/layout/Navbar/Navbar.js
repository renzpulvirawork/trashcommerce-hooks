import * as S from "./Navbar.styles";
import * as SApp from "../../../App.styles";
import { FcFullTrash } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <S.Navbar>
      <SApp.GlobalContainer>
        <S.Logo>
          <FcFullTrash></FcFullTrash>
          <span>TC</span>
        </S.Logo>
        <S.NavLinks>
          <li>
            <S.Cart>
              <IoCartOutline></IoCartOutline>
              <span>0</span>
            </S.Cart>
          </li>
        </S.NavLinks>
      </SApp.GlobalContainer>
    </S.Navbar>
  );
};

export default Navbar;

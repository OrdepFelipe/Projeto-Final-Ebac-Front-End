import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import * as S from "../Header/styles";

const Header = () => {
  return (
    <S.headerBanner>
      <div>
        <img src={logo} alt="" />
        <nav>
          <S.Links>
            <S.LinksItem>
              <a href="">Categorias</a>
            </S.LinksItem>
            <S.LinksItem>
              <a href="">Novidades</a>
            </S.LinksItem>
            <S.LinksItem>
              <a href="">Promoções</a>
            </S.LinksItem>
          </S.Links>
        </nav>
      </div>
      <S.Carrinhos>
        <p>0 - Produtos</p>
        <img src={carrinho} alt="" />
      </S.Carrinhos>
    </S.headerBanner>
  );
};

export default Header;

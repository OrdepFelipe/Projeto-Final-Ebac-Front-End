import * as S from "./styles";

import bannerImg from "../../assets/images/banner-homem-aranha.png";
import Tag from "../Tag";
import Button from "../Button";

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <S.Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</S.Titulo>
      <S.Precos>
        De <span>R$ 250,00</span>
        <br />
        por apenas R$ 99,90
      </S.Precos>
      <Button
        type="link"
        to="/produto"
        title="Cliqui aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </S.Imagem>
);
export default Banner;

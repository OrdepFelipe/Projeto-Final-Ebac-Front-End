import styled from "styled-components";
import { TagContainer } from "../Tag/styles";



export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat; //para iamgem não repetir
  background-size: cover; // fazer a imagem cobrir toda área disponível
  font-weight: bold;

  .container{
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer}{
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span{
    text-decoration: line-through;
  }
`

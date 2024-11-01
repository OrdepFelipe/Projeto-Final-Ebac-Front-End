import styled from "styled-components"
import {Cores} from "../../styles"

export const headerBanner = styled.div`
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinksItem = styled.li`
  margin-right: 16px;

  a{
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Carrinhos = styled.div`
  display: flex;
  align-items: center;

  p{
    margin-right: 16px;
    font-weight: bold;
  }

`

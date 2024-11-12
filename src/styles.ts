import { createGlobalStyle } from "styled-components";

export const Cores = {
  branca: '#EEEEEE',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

const GlobalCss = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${Cores.preta};
  color: ${Cores.branca};
  padding-top: 40px;
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

`
export default GlobalCss

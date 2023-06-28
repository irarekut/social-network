import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'Stratos-Thin', sans-serif;
    color: #000;
    overflow: hidden;

}

a,
a:visited {
  text-decoration: none;
  font-family: 'Stratos-Thin', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

main {
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
`;

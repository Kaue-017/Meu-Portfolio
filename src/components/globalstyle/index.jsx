import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyle = createGlobalStyle`

* {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scroll-behavior: smooth;
}

body {
    width: 100vw;
    background-color: ${theme.colorBackGround};
    overflow-x: hidden;
}

ul {
    list-style: none;
}
`
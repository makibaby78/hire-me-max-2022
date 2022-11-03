import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#141414",
    iconsColor: "#3b3b3b",
};

export const darkTheme = {
    body: "#141414",
    fontColor: "#fff",
    iconsColor: "#3b3b3b",
};



export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props=>props.theme.body}
    }
`
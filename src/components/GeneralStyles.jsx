import { createGlobalStyle } from "styled-components";


export const GeneralStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family:  sans-serif;
}

main {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f1f1f;
    height: calc(100vh - 93px);
}

`


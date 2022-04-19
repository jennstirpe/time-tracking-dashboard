import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
        background-color: ${({theme}) => theme.colors.mainBg};
        color: white;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    @media (min-width: 1440px) {
        body {
            height: 100vh;
        }
    }
`

export default GlobalStyles
import { createGlobalStyle } from 'styled-components'
import bg from '../img/bg.jpg'

const GlobalStyle = createGlobalStyle `

    * {
        width: 100vw;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Ubuntu;
        background: url(${bg}) no-repeat center;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`


export default GlobalStyle
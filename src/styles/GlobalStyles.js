import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #EDF6F9;
    --background-dark-grey: #83C5BE;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #83C5BE;
    --font-light-color: #EDF6F9;
    --font-dark-color: #EDF6F9;
    --font-dark-color-2: #EDF6F9;
    --sidebar-dark-color: #006D77;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --navigation-link-color: #383838;
    --editor-color:#fff;
}
.dark-theme{
    --primary-color: #007bff;
    /* --primary-color: #17B794; */
    --primary-color-light: #057FFF;
    /* --primary-color-light: #17B794; */
    --secondary-color: #6c757d;
    /* --background-dark-color: #10121A; */
    /* --background-dark-color:#191D2B; */
    --background-dark-color:black;
    
    --background-dark-grey: black;
    /* --background-dark-grey: #310A5D; */
    --border-color: #5F85DB;
    --background-light-color: #17B794;
    --background-light-color-2: rgba(3,127,255,.3);
    
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #1a1a1b;
    /* --sidebar-dark-color: #241E92; */
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --navigation-link-color: #a4acc4;
    --editor-color:#1a1a1b;
}
html {
    scroll-behavior: smooth;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    font-size: 1.1rem;
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .3s ease-in-out;
}
body::-webkit-scrollbar{
    width: 0.8rem;
}
body::-webkit-scrollbar-thumb{
    background-color: #2A2D3E;
}
body::-webkit-scrollbar-track{
    background-color: var(--font-light-color);
}
.primary-text{
    color: var(--primary-color);
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
        color: var(--primary-color);
        @media screen and (max-width: 502px){
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 502px){
        font-size: 2rem;
    }
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
//Floting Toggler
.light-dark-mode{
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
    }
}
//Nav Toggler
.ham-burger-menu{
    display: none;
    z-index: 15;
    svg{
        font-size: 1.8rem;
    }
}
.nav-toggle{
    transform: translateX(0);
    z-index: 25;
}
@media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
}
`;

export default GlobalStyle;
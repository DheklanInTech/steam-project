import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --gradient-text : linear-gradient(90deg, rgba(255,94,152,1) 0%, rgba(104,30,225,1) 100%);
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
*:focus {
    outline: 0 !important;
}

html {
    font-family: 'Roboto', sans-serif;
}
body {
    width: 100%;
    font-family: 'Roboto', sans-serif;

}
a,
a:link {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    font-family: 'Roboto', sans-serif;

}

.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: -15px 18px 37px rgba(0, 0, 0, 0.13);
  }
  
  .navbar {
    position: fixed !important;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffff;
    flex-wrap: wrap;
    width: 100%;
    z-index: 99;
    transition: all 0.5s ease;
  
    @media (max-width: 650px) {
      padding: 0 2rem;
    }
  }
`;

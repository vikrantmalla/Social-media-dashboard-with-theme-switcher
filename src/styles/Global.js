import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'


const GlobalStyles = createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
body {
    width: 100%;
    height: 100%;
    background:  ${(props) => props.theme.bodycolor};
    margin: 0;
}
img {
    max-width: 100%;
}

`
export default GlobalStyles

export const ContentWrapper = styled.main `
    margin: 0 auto;
`
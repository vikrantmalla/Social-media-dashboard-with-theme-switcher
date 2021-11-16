import styled from 'styled-components'


export const OverallContainer = styled.div `
    margin: 2rem;
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background-color: ${(props) => props.theme.header};
    transition: all .8s;
    z-index: -1;
}
@media (min-width: 62em) {
    margin: 2rem 4rem;
}
@media (min-width: 87em) {
    margin: 2rem 8rem;
}
`
export const OverallTop = styled.div `
@media (min-width: 62em) {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`
export const HeaderWrapper = styled.div `
    border-bottom: .1rem solid Blue;
    margin-bottom: 1rem;
h1{
    font-size: 1.6rem;
    color: ${(props) => props.theme.text};
    margin-bottom: .2rem;
    font-weight: 700;
}
p{
    font-size: .9rem;
    color: ${(props) => props.theme.headerheading};
    margin-bottom: 1rem;
    font-weight: 700;
}
@media (min-width: 62em) {
    border-bottom: none;
    margin: 0;
p{
    margin-bottom: 0;
}
}
`
export const ToggleSwitch = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
&:hover{
p{
    color: white;
}
}
p{
    color: ${(props) => props.theme.headerheading};
    font-weight: 700;
}
@media (min-width: 62em) {
   gap: 1.2rem;
}
`
export const OverallBottom = styled.div `
display: grid;

@media (min-width: 62em) {
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
}
@media (min-width: 87em) {
    grid-template-columns: repeat(4,1fr);
}
`
export const Overallcard = styled.div `
    margin-top: 2rem;
    background-color: ${(props) => props.theme.cardcolor};
    position: relative;
&:hover{
    cursor: pointer;
    background-color: ${(props) => props.theme.cardhover};
}
&::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
}
&:nth-child(1)::after {
    background: ${(props) => props.theme.Facebook};
}
&:nth-child(2)::after {
    background: ${(props) => props.theme.Twitter};
}
&:nth-child(3)::after {
     background: ${(props) => props.theme.Instagram};;
}
&:nth-child(4)::after {
    background: ${(props) => props.theme.Youtube};
}
h1{
    font-size: 3.5rem;
    color: ${(props) => props.theme.text};
    text-align: center;
}
h2{
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    color: hsl(228, 34%, 66%);
    letter-spacing: .2rem;
    text-align: center;
}
`

export const OverallcardTitle = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: 2rem 0;

p{
    color: hsl(228, 34%, 66%);
    font-size: .9rem;  
}

`
export const OverallcardGrowth = styled.div `
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;

.postive {
    color: hsl(163, 72%, 41%);
}
.negative {
    color: hsl(356, 69%, 56%);
}

`
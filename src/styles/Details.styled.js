import styled from 'styled-components'

export const DetailsContainer = styled.div `
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
@media (min-width: 62em) {
    gap: 1.5rem;
    margin: 1rem 4rem;
}
@media (min-width: 87em) {
    margin: 2rem 8rem;
}
`
export const DetailsHeading = styled.div `
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: hsl(0, 0%, 100%);
`
export const CardContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
@media (min-width: 62em) {
    grid-template-columns: repeat(2,1fr);
}
@media (min-width: 87em) {
    grid-template-columns: repeat(4,1fr);
}    
`
export const Detailscard = styled.div `
    background-color: ${(props) => props.theme.cardcolor};
    padding: 2rem;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, min-content);
    justify-content: space-between;
    gap: 1rem;
    border-radius: 6px;
&:hover{
    cursor: pointer;
    background-color: ${(props) => props.theme.cardhover};
}
p{
    text-align: left;
    font-size: .9rem;
    font-weight: 700;
    color: hsl(228, 34%, 66%);
}
img{
    justify-self: end;
}
h1{
    text-align: left;
    color:${(props) => props.theme.text};
}
`
export const DetailscardGrowth = styled.h1 `
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
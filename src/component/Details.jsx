import React from 'react'
import DetailsCard from './DetailsCard';
import { CardContainer, DetailsContainer, DetailsHeading } from '../styles/Details.styled';

const Details = () => {
    return (
        <>
            <DetailsContainer>
                <DetailsHeading>Overview - Today</DetailsHeading>
                <CardContainer>
                <DetailsCard/>
                </CardContainer> 
            </DetailsContainer>
        </>
    )
}

export default Details

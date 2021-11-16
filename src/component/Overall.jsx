import React from 'react'
import { OverallContainer, OverallTop, HeaderWrapper, ToggleSwitch, OverallBottom, } from '../styles/Overall.styled'
import OverallCard from './OverallCard'
import ToggleButton from './ToggleButton'

const Overall = () => {
    return (
        <>
            <OverallContainer>
                <OverallTop>
                    <HeaderWrapper>
                        <h1>
                            Social Media Dashboard
                        </h1>
                        <p>
                            Total Followers: 23,004
                        </p>
                    </HeaderWrapper>
                    <ToggleSwitch>
                        <p>Dark Mode</p>
                        <ToggleButton />
                    </ToggleSwitch>
                </OverallTop>
                <OverallBottom>
                    <OverallCard />
                </OverallBottom>
            </OverallContainer>
        </>
    )
}

export default Overall

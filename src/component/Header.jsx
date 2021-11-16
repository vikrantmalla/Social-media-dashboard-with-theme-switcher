import React from 'react'
import ToggleButton from "../component/ToggleButton"
import { StyledHeader, Content } from '../styles/Header.styled'
import { Toggle} from '../styles/Toggle.styled'

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Content>
                    <h1>
                        Social Media Dashboard
                    </h1>
                    <p>
                        Total Followers: 23,004
                    </p>
                </Content>
                <Toggle>
                    <p>Dark Mode</p>
                    <ToggleButton />
                </Toggle >
            </StyledHeader>
        </>
    )
}

export default Header

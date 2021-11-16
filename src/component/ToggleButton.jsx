import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import { Switch } from '../styles/Toggle.styled';
const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>

            <Switch>
                <input type="checkbox" onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')} />
                <span className ="slider round"></span>
            </Switch>
        </>
    )
}

export default ToggleButton
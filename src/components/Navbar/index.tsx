import React, { Fragment } from 'react';

import { NavContainer } from './style';


interface NavProps {
    title: string;
}

const Navbar: React.FC<NavProps> = ({ title }) => {
    return (
        <>
            <NavContainer>
                <h3>{title}</h3>
            </NavContainer>
        </>
    )
}   

export default Navbar;

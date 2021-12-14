import React from 'react'
import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavMenu,
    NavbarItem,
    NavbarLink,
    BtnWrap,
    NavBtn,
    NavBtn2
} from './navbarElements';
import logo from '../../assets/contenedor-logo-copy@2x.png';


export default function NavbarHomepage () {





    return (
        <>
            <NavbarContainer>
                <Nav>
                    <NavLogo to="/home"><img src={logo} alt="logo-truequelibro" /></NavLogo>
                    <NavMenu>
                        <NavbarItem>
                            <NavbarLink to="/home-page" >Inicio</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/mision" >Nuestra misión</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/quienes-somos" >¿Quienés somos?</NavbarLink>
                        </NavbarItem>

                    </NavMenu>
                    <BtnWrap>
                        <NavBtn to="/register">Sign Up</NavBtn>
                        <NavBtn2 to="/login" >Login</NavBtn2>
                    </BtnWrap>
                </Nav>
            </NavbarContainer>
        </>
    )
}


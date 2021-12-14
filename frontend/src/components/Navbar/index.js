import React from 'react'

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Nav>
                    <NavLogo>LOGO</NavLogo>
                    <NavMenu>
                        <NavbarItem>
                            <NavbarLink to="/home-page" >Inicio</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/home-page" >Nuestra misión</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/home-page" >¿Quineés somos?</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/home-page" >Inicio</NavbarLink>
                        </NavbarItem>

                        <BtnWrap>
                            <NavBtn>Sign Up</NavBtn>
                            <NavBtn>Sign In</NavBtn>
                        </BtnWrap>
                    </NavMenu>
                    <NavbarSearch>
                        <SearchLogo/>
                        <SearchBar type="text" placeholder="Buscar libros" />
                    </NavbarSearch>
                </Nav>
            </NavbarContainer>
        </>
    )
}

export default Navbar

import styled from 'styled-components';


export const NavbarContainer = styled.div`
    height: 60px;
    width: 100%;
    background: transparent;
    position: sticky;
    top: 0;
    margin-top: -60px;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999;
`;

export const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    
`;

export const NavMenu = styled.ul`
    width: 550px;
    display: flex;
    align-items:center;
    justify-content: space-around;
`;

export const NavbarItem = styled.li`

`;
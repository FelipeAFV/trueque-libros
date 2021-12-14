import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

export const NavbarContainer = styled.div`
    height: 120px;
    width: 100%;
    background: transparent;
    position: sticky;
    top: 0;
    /* margin-top: -60px; */

    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999;
`;

export const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    
`;

export const NavMenu = styled.ul`
    width: 550px;
    display: flex;
    align-items:center;
    justify-content: space-around;
`;

export const NavLogo = styled(Link)`
    img {
        height: 5.5rem;
        width: 347px;
        margin-top: 1rem;
    }
`;

export const NavbarItem = styled.li`
    position: relative;
    height: 60px;
    padding: 0 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::before{
        content:"";
        position:absolute;
        top: -240%;
        left: 0;
        height: 60px;
        width: 100%;
        background-image:linear-gradient(to right, 
            rgb(157,18,114),
            rgb(63,43,150)
            ););
        transition: all .4s ease-in-out;
    }

    &:hover::before {
        top: 0;
        border-radius:20px;
        color:#fff;

    }
`;


export const NavbarLink = styled(Link)`
    font-size: 20px;
    /* color: #dee1ec; */
    color: #000;
    text-decoration:none;
    font-weight: 500;
    z-index:20;
    transition: color .7s ease-in;
`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const NavBtn = styled(Link)`
    color:#fff;
    font-size: 14px;
    padding: 10px 24px;
    border-radius: 50px;
    border: none;
    outline: none;
    text-decoration:none;
    margin-left: 1rem;
    cursor: pointer;
    background-image: linear-gradient(
        to right,
    rgb(142, 45, 226),
    rgb(74, 0, 224)
        );
    transition: all .3s;

    opacity: .8;
    &:hover {
        opacity: 1;
    }
`;

export const NavBtn2 = styled(Link)`
    color:#000;
    font-size: 14px;
    font-weight:600;
    padding: 10px 24px;
    text-decoration:none;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-left: 1rem;
    cursor: pointer;
    background-color: #fff;
    transition: all .3s;

    opacity: .8;
    &:hover {
        opacity: 1;
    }
`;

export const NavbarSearch = styled.div`
    position: relative;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchLogo = styled(BsSearch)`
    color: #000;
    position: absolute;
    left: 55px;
    font-size: 18px;
`;

export const SearchBar = styled.input`
        width:80%;
        padding: 8px;
        font-size: 18px;
        border-radius: 18px;
        outline:none;
        border: 1px solid #000;
        padding-left: 3rem;
        
        
`;

export const Input = ({type,placeholder,name, onChange})=> {
    return (
            <SearchBar 
            placeholder={placeholder && placeholder} 
            type={type ? type : "text"} 
            name={name}
            onChange={onChange}
            required
            autoComplete="off"
             />
    )
}
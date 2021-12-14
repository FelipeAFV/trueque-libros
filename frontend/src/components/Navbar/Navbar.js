import React, {useState} from 'react'
import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavMenu,
    NavbarItem,
    NavbarLink,
    BtnWrap,
    NavBtn,
    NavBtn2,
    NavbarSearch,
    SearchLogo,
    SearchBar
} from './navbarElements';
import logo from '../../assets/contenedor-logo-copy@2x.png';
import axios from 'axios';
import {Input} from './navbarElements'

export default function Navbar () {

    /* const[book, setBook] = useState(""); */
    const[search,setSearch] = useState("");

    /* const onSearch =async()=>{
        await axios.get("http://localhost:3000/book/all")
        .then(response=>{
           setBook(response.data);
        }).catch(error=>{
            console.log(error);
        })
    } */

/*     const handleSubmit = async e => {
        setBook(e.target.value);
        console.log("Búsqueda: "+e.target.value);
        e.preventDefault();
        await onSearch(book);
    }; */

    const handleChange=e=>{
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
        setSearch(prev => ({...prev, [inputName]: value}));
        console.log(value);
    };



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
                    <NavbarSearch>
                        <SearchLogo />
                        <Input type="text" placeholder="Buscar libros" onChange={handleChange} name="book" value={search}/>
                    </NavbarSearch>
                    <BtnWrap>
                        <NavBtn to="/register">Sign Up</NavBtn>
                        <NavBtn2 to="/login" >Login</NavBtn2>
                    </BtnWrap>
                </Nav>
            </NavbarContainer>
        </>
    )
}


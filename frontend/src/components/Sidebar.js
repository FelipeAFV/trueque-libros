import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/contenedor-logo-copy@2x.png';
import Input from './Input';


const initialState = {
    username: '',
    names: '',
    email: '',
    password: ''
}

export default function Sidebar () {
    const[state, setState]= useState(initialState);


    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Register');
        console.log(state);
        
    };

    const handleChange = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(prev => ({...prev, [inputName]: value}));
        console.log(inputName);
    };

    

    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="logo-truequelibro" />
            </LogoWrapper>

            <Form onSubmit={handleSubmit}>
                <h3>Regístrate</h3>
                <Input placeholder="Usuario"  name="username" value={state.username} onChange={handleChange} />
                <Input placeholder="Nombre" name="names" value={state.names} onChange={handleChange}/>
                <Input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange}/>
                <Input type="password" placeholder="Contraseña" name="password" value={state.password} onChange={handleChange}/>
                <button>Regístrate</button>
            </Form>
            <div>
                <Terms >
                    Al ingresar, estás aceptando la política de privacidad <br /> y términos de servicio
                    
                </Terms>
                <h4>¿Ya tienes cuenta?<span>Iniciar Sesión</span> </h4>
            </div>
        </Container>


    )
};

const Terms=styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 20px;
    color: #808080;
    font-weight: 300;

`;

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        background-color: #57D3DB;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;
        font-size: 20px;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    img {
        height: 6rem;
    }
`;

const Container = styled.div`
min-width: 400px;
backdrop-filter: blur(35px);
background-color: rgba(255,255,255,0.4);
height: 100%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 0 4rem;

@media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
}

h4 {
    color: #808080;
    font-weight: bold;
    font-size: 17px;
    margin-top: 2rem;
    span {
        color: #ff8d8d;
        cursor: pointer;
    }
}

`;




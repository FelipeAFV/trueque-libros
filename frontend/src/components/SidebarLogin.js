import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/contenedor-logo-copy@2x.png';
import Input from './Input';
import { onLogin } from '../auth.api';
import {useNavigate} from 'react-router-dom';


const initialState = {
    username: '',
    password: ''
}

export default function SidebarLogin() {
    const [state, setState] = useState(initialState);
    let navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Login');
        console.log(state);
        await onLogin(state);
        navigate('/home-page');

    };

    const handleChange = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(prev => ({ ...prev, [inputName]: value }));
        console.log(inputName);
    };

    /* const handleNext= e => {
        navigate('/home-page')
    } */

    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="logo-truequelibro" />
            </LogoWrapper>

            <Form onSubmit={handleSubmit}>
                <h3>Iniciar Sesión</h3>
                <Input placeholder="Usuario" name="username" value={state.username} onChange={handleChange} />
                <Input type="password" placeholder="Contraseña" name="password" value={state.password} onChange={handleChange} />
                <button>Iniciar Sesión</button>
            </Form>
            <div>
                <h4>¿No tienes cuenta?<span>Regístrate</span> </h4>
                <Terms >
                </Terms>

            </div>
        </Container>


    )
};

const Terms = styled.p`
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




import React from 'react'
import styled from 'styled-components';
import bgb from '../assets/contenedor-lado-derecho-1@1x.png'
const Main = () => {
    return (
        <Container>
            <ImageWrapper>
            <h1>
                NUESTRO DESEO
            </h1>
            <h2>
                <>Intercambia tu libro por uno de interés con otras personas y ayuda al mundo a disminuir la deforestación. Con esto esperamos reducir la elaboración masiva de libros y conservar los ya existentes en buen cuidado y para los demás.</>
            </h2>
            </ImageWrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 60px;
        font-weight: 900;
        color: #343434;

    }
    @media (max-width: 900px) {
        display:none;
    }
`;

const ImageWrapper = styled.div`
    background-image: url(${bgb});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display:flex;

    h1 {
        margin-top: 10rem;
        margin-left: 5rem;
        color: #57D3DB;
    }

    h2 {
        
        
        color: #FFFFFF;
        margin-top: 28rem;
        font-weight: bold;
        font-size: 50px;
    }
`;

export default Main

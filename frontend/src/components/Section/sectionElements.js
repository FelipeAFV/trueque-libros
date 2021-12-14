import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    justify-content: center;
`;

export const H1 = styled.h1`
font-size: 44px;
color: #000;
font-weight: bold;
transition: all 0.3s;
transform: skewX(0deg);
@media screen and (max-width: 769px) {
  font-size: 32px;
}
@media screen and (max-width: 400px) {
  font-size: 22px;
}
@media screen and (max-width: 300px) {
  font-size: 20px;
}
& span {
  @media screen and (max-width: 769px) {
    font-size: 34px;
  }
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
}
&:hover {
  transform: skewX(-20deg);
}
&:hover span {
  color: #ff304f;
}
`;

const animeHerop = keyframes`
    from{
        transform: scale(.6);
        opacity:0;
    }
    to{
        transform: scale(1) translateY(0px);
        opacity:1;
`;

export const Imp = styled.div`
`;

export const Desc = styled.p`
text-align: center;
  margin-left: 12rem;
  margin-right: 12rem;
  font-size: 24px;
  color: #000;
  margin-top: 10px;
  animation: ${animeHerop} 0.6s forwards ease-in;
  @media screen and (max-width: 769px) {
    width: 300px;
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
    font-size: 17px;
  }
  @media screen and (max-width: 300px) {
    width: 230px;
    font-size: 14px;
  }
`;

export const BtnRoute = styled.h1`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
  text-align: center;
`;

export const SectionBtn = styled(Link)`
color: #000;
  font-size: 16px;
  text-decoration:none;
  padding: 15px 35px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgb(142, 45, 226),
    rgb(74, 0, 224)
  );
  margin-left: 20px;
`;

export const ForwardIcon = styled.div`

`;


import React from 'react'
import Main from '../../components/Main';
import SidebarLogin from '../../components/SidebarLogin';
import styled from 'styled-components';
import bg from '../../assets/background@1x.svg';

const Login = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <SidebarLogin />
                    <Main />
                </Wrapper>
            </Container>
        </div>
    )
}

export const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
`;

export const Wrapper = styled.div`
  background-image: url(${bg});
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
export default Login

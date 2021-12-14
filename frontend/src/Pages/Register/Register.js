import React from 'react';
import styled from 'styled-components';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import bg from '../../assets/background@1x.svg';

const Register = () => {
    
    return (
        <div>
            <Container>
                <Wrapper>
                    <Sidebar />
                    <Main />
                </Wrapper>
            </Container>
        </div>
    )
}


const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
`;

const Wrapper = styled.div`
  background-image: url(${bg});
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
export default Register

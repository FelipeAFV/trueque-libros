import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AcmeNormalWhite50px,
  RobotoMediumPictonBlue22px,
  RobotoLightTurquoisePearl14px,
  RobotoLightBlack25px,
  AdobeblankRegularNormalWhite25px,
  OffsideNormalWhite26px,
  ValignTextBottom,
  RobotoLightWhite22px,
  RobotoLightBlack22px,
} from "../../styledMixins";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        last_name: '',
        email:'',
        password:''
      }
    }
  }


  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  render() {
    const {
      usuario,
      usuarioCopy,
      usuarioCopy3,
      usuarioCopy4,
      contenedorLogo,
      usuarioCopy5,
      contenedorLadoDerecho,
      usuarioCopy6,
      usuarioCopy2,
      regstrate,
      nuestroDeseo,
      intercambiaTuLibroPorUnoD,
      contrasea,
      noTienesCuenta,
      registrate,
      regstrate2,
      intercambiaTuLibro,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="register screen">
          <OverlapGroup>
            <Contenedor></Contenedor>
            <Rectangle2 src="/img/rectangle-2-2@2x.svg" />
            <Rectangle></Rectangle>
            <RectangleCopy2></RectangleCopy2>
            <RectangleCopy3></RectangleCopy3>
            <RectangleCopy></RectangleCopy>
            <Usuario>{usuario}</Usuario>
            <UsuarioCopy type="text" name="name" placeholder="Nombre" onChange={this.handleChange}/>
            <UsuarioCopy3>{usuarioCopy3}</UsuarioCopy3>
            <UsuarioCopy4 type="text" name="last_name" placeholder="Apellido" onChange={this.handleChange} />
            <Link to="/landing-page">
              <ContenedorLogo src={contenedorLogo} />
            </Link>
            <UsuarioCopy5>{usuarioCopy5}</UsuarioCopy5>
            <ContenedorLadoDerecho src={contenedorLadoDerecho} />
            <UsuarioCopy6 type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
            <UsuarioCopy2 type="text" name="password" placeholder="Contraseña" onChange={this.handleChange}/>
            <Regstrate>{regstrate}</Regstrate>
            <NuestroDeseo>{nuestroDeseo}</NuestroDeseo>
            <IntercambiaTuLibroPorUnoD>{intercambiaTuLibroPorUnoD}</IntercambiaTuLibroPorUnoD>
            <Contrasea>{contrasea}</Contrasea>
            <NoTienesCuenta>{noTienesCuenta}</NoTienesCuenta>
            <Link to="/login">
              <Registrate>{registrate}</Registrate>
            </Link>
            <Link to="/home-page">
              <Regstrate1>{regstrate2}</Regstrate1>
            </Link>
            <IntercambiaTuLibro>{intercambiaTuLibro}</IntercambiaTuLibro>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: url(/img/background-1@1x.svg);
  background-size: 100% 100%;
`;

const Contenedor = styled.div`
  position: absolute;
  width: 1000px;
  height: 600px;
  top: 240px;
  left: 460px;
  background-color: var(--white);
`;

const Rectangle2 = styled.img`
  position: absolute;
  width: 352px;
  height: 50px;
  top: 694px;
  left: 509px;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 352px;
  height: 1px;
  top: 467px;
  left: 509px;
  background-color: var(--quill-gray);
`;

const RectangleCopy2 = styled.div`
  position: absolute;
  width: 352px;
  height: 1px;
  top: 537px;
  left: 509px;
  background-color: var(--quill-gray);
`;

const RectangleCopy3 = styled.div`
  position: absolute;
  width: 352px;
  height: 1px;
  top: 607px;
  left: 509px;
  background-color: var(--quill-gray);
`;

const RectangleCopy = styled.div`
  position: absolute;
  width: 352px;
  height: 1px;
  top: 667px;
  left: 509px;
  background-color: var(--quill-gray);
`;

const Usuario = styled.div`
  ${ValignTextBottom}
  ${RobotoLightBlack22px}
            position: absolute;
  width: 103px;
  height: 22px;
  top: 412px;
  left: 509px;
  letter-spacing: 0;
`;

const UsuarioCopy = styled.input`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 150px;
  top: 443px;
  left: 509px;
  letter-spacing: 0;
  border: none;
  
`;

const UsuarioCopy3 = styled.div`
  ${ValignTextBottom}
  ${RobotoLightBlack22px}
            position: absolute;
  width: 103px;
  height: 22px;
  top: 482px;
  left: 509px;
  letter-spacing: 0;
  border: none;
`;

const UsuarioCopy4 = styled.input`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 150px;
  top: 513px;
  left: 509px;
  letter-spacing: 0;
  border: none;
`;

const ContenedorLogo = styled.img`
  position: absolute;
  width: 249px;
  height: 40px;
  top: 280px;
  left: 561px;
  object-fit: cover;
`;

const UsuarioCopy5 = styled.div`
  ${ValignTextBottom}
  ${RobotoLightBlack22px}
            position: absolute;
  width: 103px;
  height: 22px;
  top: 552px;
  left: 509px;
  letter-spacing: 0;
`;

const ContenedorLadoDerecho = styled.img`
  position: absolute;
  width: 550px;
  height: 600px;
  top: 240px;
  left: 910px;
  object-fit: cover;
`;

const UsuarioCopy6 = styled.input`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 150px;
  top: 583px;
  left: 509px;
  letter-spacing: 0;
  border: none;
`;

const UsuarioCopy2 = styled.input`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 150px;
  top: 647px;
  left: 509px;
  letter-spacing: 0;
  border: none;
`;

const Regstrate = styled.div`
  ${RobotoLightBlack25px}
  position: absolute;
  top: 343px;
  left: 629px;
  letter-spacing: 0;
`;

const NuestroDeseo = styled.div`
  ${AcmeNormalWhite50px}
  position: absolute;
  width: 364px;
  top: 316px;
  left: 969px;
  letter-spacing: 0;
`;

const IntercambiaTuLibroPorUnoD = styled.div`
  ${AdobeblankRegularNormalWhite25px}
  position: absolute;
  top: 431px;
  left: 969px;
  letter-spacing: 0;
`;

const Contrasea = styled.div`
  ${RobotoLightBlack22px}
  position: absolute;
  width: 113px;
  top: 622px;
  left: 509px;
  letter-spacing: 0;
`;

const NoTienesCuenta = styled.div`
  ${RobotoLightBlack22px}
  position: absolute;
  width: 186px;
  top: 789px;
  left: 521px;
  text-align: right;
  letter-spacing: 0;
`;

const Registrate = styled.div`
  ${RobotoMediumPictonBlue22px}
  position: absolute;
  width: 138px;
  top: 789px;
  left: 711px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Regstrate1 = styled.div`
  ${RobotoLightWhite22px}
  position: absolute;
  top: 706px;
  left: 636px;
  letter-spacing: 0;
  cursor: pointer;
`;

const IntercambiaTuLibro = styled.div`
  ${OffsideNormalWhite26px}
  position: absolute;
  width: 465px;
  top: 423px;
  left: 952px;
  letter-spacing: 0;
`;

export default Register;

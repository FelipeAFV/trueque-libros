import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AcmeNormalWhite50px,
  RobotoMediumPictonBlue22px,
  OffsideNormalWhite26px,
  RobotoLightTurquoisePearl14px,
  RobotoLightBlack25px,
  AdobeblankRegularNormalWhite25px,
  RobotoLightWhite22px,
  RobotoLightBlack22px,
} from "../../styledMixins";
import "./Login.css";

class Login extends React.Component {
  render() {
    const {
      contenedorLogo,
      contenedorLadoDerecho,
      usuario,
      usuarioCopy,
      usuarioCopy2,
      iniciarSesin,
      nuestroDeseo,
      intercambiaTuLibroPorUnoD,
      contrasea,
      noTienesCuenta,
      registrate,
      iniciar,
      intercambiaTuLibro,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="login screen">
          <OverlapGroup>
            <Contenedor></Contenedor>
            <Rectangle2 src="/img/rectangle-2-1@2x.svg" />
            <Rectangle></Rectangle>
            <RectangleCopy></RectangleCopy>
            <ContenedorLogo src={contenedorLogo} />
            <ContenedorLadoDerecho src={contenedorLadoDerecho} />
            <Usuario>{usuario}</Usuario>
            <UsuarioCopy>{usuarioCopy}</UsuarioCopy>
            <UsuarioCopy2>{usuarioCopy2}</UsuarioCopy2>
            <IniciarSesin>{iniciarSesin}</IniciarSesin>
            <NuestroDeseo>{nuestroDeseo}</NuestroDeseo>
            <IntercambiaTuLibroPorUnoD>{intercambiaTuLibroPorUnoD}</IntercambiaTuLibroPorUnoD>
            <Contrasea>{contrasea}</Contrasea>
            <NoTienesCuenta>{noTienesCuenta}</NoTienesCuenta>
            <Link to="/register">
              <Registrate>{registrate}</Registrate>
            </Link>
            <Link to="/home-page">
              <Iniciar>{iniciar}</Iniciar>
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
  background-image: url(/img/background@1x.svg);
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
  top: 616px;
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

const RectangleCopy = styled.div`
  position: absolute;
  width: 352px;
  height: 1px;
  top: 560px;
  left: 509px;
  background-color: var(--quill-gray);
`;

const ContenedorLogo = styled.img`
  position: absolute;
  width: 249px;
  height: 40px;
  top: 280px;
  left: 561px;
  object-fit: cover;
`;

const ContenedorLadoDerecho = styled.img`
  position: absolute;
  width: 550px;
  height: 600px;
  top: 240px;
  left: 910px;
  object-fit: cover;
`;

const Usuario = styled.div`
  ${RobotoLightBlack22px}
  position: absolute;
  width: 75px;
  top: 412px;
  left: 509px;
  letter-spacing: 0;
`;

const UsuarioCopy = styled.div`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 75px;
  top: 443px;
  left: 509px;
  letter-spacing: 0;
`;

const UsuarioCopy2 = styled.div`
  ${RobotoLightTurquoisePearl14px}
  position: absolute;
  width: 75px;
  top: 540px;
  left: 509px;
  letter-spacing: 0;
`;

const IniciarSesin = styled.div`
  ${RobotoLightBlack25px}
  position: absolute;
  top: 340px;
  left: 612px;
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
  top: 515px;
  left: 509px;
  letter-spacing: 0;
`;

const NoTienesCuenta = styled.div`
  ${RobotoLightBlack22px}
  position: absolute;
  width: 186px;
  top: 786px;
  left: 533px;
  text-align: right;
  letter-spacing: 0;
`;

const Registrate = styled.div`
  ${RobotoMediumPictonBlue22px}
  position: absolute;
  width: 115px;
  top: 786px;
  left: 723px;
  letter-spacing: 0;
  cursor: pointer;
`;

const Iniciar = styled.div`
  ${RobotoLightWhite22px}
  position: absolute;
  top: 627px;
  left: 646px;
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

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InterNormalEerieBlack24px,
  BarlowNormalEerieBlack18px,
  InterNormalEerieBlack18px,
  InterNormalBlack18px,
  NobileBoldEerieBlack48px,
  Border1pxBlack,
  InterNormalEerieBlack16px,
  Border1pxBlack2,
  InterNormalAlto18px,
} from "../../styledMixins";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    const {
      contenedorLogoCopy,
      inicio,
      quinesSomos,
      nuestraMisin,
      buscar,
      starIcon,
      starIconCopy,
      starIconCopy2,
      starIconCopy3,
      starIconCopy4,
      rectangle8,
      cambiarFoto,
      miPerfil,
      nombreNombreCopy,
      apellidoApellido,
      apellidoApellidoCopy,
      emailTuemailCorreoCl,
      valoracin,
      emailTuemailCorreoClCopy,
      guardar,
      nombreNombre,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="profile screen">
          <OverlapGroup>
            <Group></Group>
            <ContenedorLogoCopy src={contenedorLogoCopy} />
            <Link to="/home-page">
              <Inicio>{inicio}</Inicio>
            </Link>
            <QuinesSomos>{quinesSomos}</QuinesSomos>
            <NuestraMisin>{nuestraMisin}</NuestraMisin>
            <Rectangle5></Rectangle5>
            <SearchIcon src="/img/search-icon@2x.svg" />
            <Ellipse6></Ellipse6>
            <Object src="/img/object@2x.svg" />
            <Buscar>{buscar}</Buscar>
            <Rectangle6 src="/img/rectangle-6@1x.svg" />
            <Rectangle9></Rectangle9>
            <Rectangle9Copy></Rectangle9Copy>
            <Rectangle9Copy2></Rectangle9Copy2>
            <Rectangle7 src="/img/rectangle-7@1x.svg" />
            <StarIcon src={starIcon} />
            <StarIconCopy src={starIconCopy} />
            <StarIconCopy2 src={starIconCopy2} />
            <StarIconCopy3 src={starIconCopy3} />
            <StarIconCopy4 src={starIconCopy4} />
            <Rectangle8 src={rectangle8} />
            <CambiarFoto>{cambiarFoto}</CambiarFoto>
            <MiPerfil>{miPerfil}</MiPerfil>
            <Object1 src="/img/object-1@2x.svg" />
            <NombreNombreCopy>{nombreNombreCopy}</NombreNombreCopy>
            <ApellidoApellido>{apellidoApellido}</ApellidoApellido>
            <ApellidoApellidoCopy>{apellidoApellidoCopy}</ApellidoApellidoCopy>
            <EmailTuemailcorreocl>{emailTuemailCorreoCl}</EmailTuemailcorreocl>
            <Valoracin>{valoracin}</Valoracin>
            <EmailTuemailcorreoclCopy>{emailTuemailCorreoClCopy}</EmailTuemailcorreoclCopy>
            <RectangleCopy2></RectangleCopy2>
            <Link to="/home-page">
              <Guardar>{guardar}</Guardar>
            </Link>
            <NombreNombre>{nombreNombre}</NombreNombre>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 2731px;
  height: 1444px;
  position: relative;
  margin-left: -810px;
  margin-top: -363.5px;
`;

const Group = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  top: 364px;
  left: 810px;
  background-color: var(--white);
`;

const ContenedorLogoCopy = styled.img`
  position: absolute;
  width: 347px;
  height: 98px;
  top: 457px;
  left: 980px;
`;

const Inicio = styled.div`
  ${InterNormalEerieBlack24px}
  position: absolute;
  top: 492px;
  left: 1638px;
  text-align: right;
  letter-spacing: 0;
  cursor: pointer;
`;

const QuinesSomos = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 496px;
  left: 1938px;
  text-align: right;
  letter-spacing: 0;
`;

const NuestraMisin = styled.div`
  ${InterNormalEerieBlack18px}
  position: absolute;
  top: 496px;
  left: 1754px;
  text-align: right;
  letter-spacing: 0;
`;

const Rectangle5 = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  width: 294px;
  height: 41px;
  top: 486px;
  left: 2136px;
  background-color: var(--white);
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 27px;
  height: 27px;
  top: 494px;
  left: 2146px;
`;

const Ellipse6 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 64px;
  height: 64px;
  top: 474px;
  left: 2478px;
  background-color: var(--white);
  border-radius: 32px;
`;

const Object = styled.img`
  position: relative;
  width: 1721px;
  height: 164px;
  top: 360px;
  right: -810px;
  
`;

const Buscar = styled.div`
  ${InterNormalAlto18px}
  position: absolute;
  top: 496px;
  left: 2175px;
  text-align: right;
  letter-spacing: 0;
`;

const Rectangle6 = styled.img`
  position: absolute;
  width: 1920px;
  height: 870px;
  top: 574px;
  left: 811px;
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 720px;
  height: 24px;
  top: 762px;
  left: 1744px;
  background-color: var(--white);
  border-radius: 10px;
`;

const Rectangle9Copy = styled.div`
  position: absolute;
  width: 720px;
  height: 24px;
  top: 832px;
  left: 1744px;
  background-color: var(--white);
  border-radius: 10px;
`;

const Rectangle9Copy2 = styled.div`
  position: absolute;
  width: 720px;
  height: 24px;
  top: 892px;
  left: 1744px;
  background-color: var(--white);
  border-radius: 10px;
`;

const Rectangle7 = styled.img`
  position: absolute;
  width: 536px;
  height: 831px;
  top: 591px;
  left: 980px;
`;

const StarIcon = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 1356px;
  left: 1214px;
`;

const StarIconCopy = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 1356px;
  left: 1230px;
`;

const StarIconCopy2 = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 1356px;
  left: 1246px;
`;

const StarIconCopy3 = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 1356px;
  left: 1262px;
`;

const StarIconCopy4 = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 1356px;
  left: 1278px;
`;

const Rectangle8 = styled.img`
  position: absolute;
  width: 303px;
  height: 448px;
  top: 680px;
  left: 1096px;
  object-fit: cover;
`;

const CambiarFoto = styled.div`
  position: absolute;
  top: 1164px;
  left: 1173px;
  font-family: var(--font-family-noto_sans_sc);
  font-weight: 400;
  color: var(--eerie-black);
  font-size: 24px;
  letter-spacing: 0;
`;

const MiPerfil = styled.div`
  ${NobileBoldEerieBlack48px}
  position: absolute;
  top: 646px;
  left: 1743px;
  letter-spacing: 0;
`;

const Object1 = styled.img`
  position: absolute;
  width: 543px;
  height: 827px;
  top: 0;
  left: 589px;
`;

const NombreNombreCopy = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 762px;
  left: 1744px;
  letter-spacing: 0;
`;

const ApellidoApellido = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 1254px;
  left: 1186px;
  letter-spacing: 0;
`;

const ApellidoApellidoCopy = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 832px;
  left: 1743px;
  letter-spacing: 0;
`;

const EmailTuemailcorreocl = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 1292px;
  left: 1162px;
  letter-spacing: 0;
`;

const Valoracin = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 1332px;
  left: 1212px;
  letter-spacing: 0;
`;

const EmailTuemailcorreoclCopy = styled.div`
  ${BarlowNormalEerieBlack18px}
  position: absolute;
  top: 892px;
  left: 1744px;
  letter-spacing: 0;
`;

const RectangleCopy2 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 107px;
  height: 42px;
  top: 988px;
  left: 1744px;
  border-radius: 12px;
`;

const Guardar = styled.div`
  ${InterNormalEerieBlack16px}
  position: absolute;
  top: 999px;
  left: 1766px;
  text-align: right;
  letter-spacing: 0;
  cursor: pointer;
`;

const NombreNombre = styled.div`
  position: absolute;
  width: 137px;
  top: 1214px;
  left: 1186px;
  font-family: var(--font-family-barlow);
  font-weight: 400;
  color: #0c0c0c;
  font-size: var(--font-size-xxxs);
  letter-spacing: 0;
`;

export default Profile;

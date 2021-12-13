import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AlataNormalEerieBlack27px,
  InterNormalEerieBlack24px,
  InterNormalEerieBlack18px,
  NobileBoldEerieBlack27px,
  InterNormalBlack18px,
  NobileBoldEerieBlack48px,
  NobileNormalEerieBlack66px,
  Border1pxBlack,
  Border1pxBlack2,
  InterNormalAlto18px,
} from "../../styledMixins";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const {
      contenedorLogoCopy,
      inicio,
      quinesSomos,
      nuestraMisin,
      rectangle3,
      realizaIntercambiosDeLibros,
      losIntercambiosDeLibrosCon,
      empezar,
      librosParaTodos,
      buscar,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page screen">
          <OverlapGroup>
            <Group></Group>
            <ContenedorLogoCopy src={contenedorLogoCopy} />
            <Inicio>{inicio}</Inicio>
            <QuinesSomos>{quinesSomos}</QuinesSomos>
            <NuestraMisin>{nuestraMisin}</NuestraMisin>
            <EllipseCopy3></EllipseCopy3>
            <EllipseCopy5></EllipseCopy5>
            <EllipseCopy2></EllipseCopy2>
            <Ellipse></Ellipse>
            <EllipseCopy></EllipseCopy>
            <EllipseCopy4></EllipseCopy4>
            <Rectangle2 src="/img/rectangle-2-3@1x.svg" />
            <NewShape src="/img/new-shape@1x.svg" />
            <NewShapeCopy src="/img/new-shape-copy@1x.svg" />
            <NewShapeCopy2 src="/img/new-shape-copy-2@1x.svg" />
            <Rectangle3 src={rectangle3} />
            <RealizaIntercambiosDeLibros>{realizaIntercambiosDeLibros}</RealizaIntercambiosDeLibros>
            <LosIntercambiosDeLibrosCon>{losIntercambiosDeLibrosCon}</LosIntercambiosDeLibrosCon>
            <Rectangle4 src="/img/rectangle-4-1@2x.svg" />
            <Empezar>{empezar}</Empezar>
            <LibrosParaTodos>{librosParaTodos}</LibrosParaTodos>
            <Rectangle5></Rectangle5>
            <SearchIcon src="/img/search-icon-1@2x.svg" />

            <Ellipse6></Ellipse6>
            <Link to="/profile">
            
              <Object src="/img/object-2@2x.svg" />
            
              
            </Link>

            <Buscar>{buscar}</Buscar>
            <Rectangle5Copy></Rectangle5Copy>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 2862px;
  height: 1112px;
  position: relative;
  margin-left: -810px;
  margin-top: -32px;
`;

const Group = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  top: 32px;
  left: 810px;
  background-color: var(--white);
`;

const ContenedorLogoCopy = styled.img`
  position: absolute;
  width: 347px;
  height: 98px;
  top: 126px;
  left: 980px;
`;

const Inicio = styled.div`
  ${InterNormalEerieBlack24px}
  position: absolute;
  top: 161px;
  left: 1638px;
  text-align: right;
  letter-spacing: 0;
`;

const QuinesSomos = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 164px;
  left: 1938px;
  text-align: right;
  letter-spacing: 0;
`;

const NuestraMisin = styled.div`
  ${InterNormalEerieBlack18px}
  position: absolute;
  top: 164px;
  left: 1754px;
  text-align: right;
  letter-spacing: 0;
`;

const EllipseCopy3 = styled.div`
  position: absolute;
  width: 219px;
  height: 229px;
  top: 528px;
  left: 2264px;
  background-color: var(--conifer);
  border-radius: 109.5px/114.5px;
`;

const EllipseCopy5 = styled.div`
  position: absolute;
  width: 261px;
  height: 261px;
  top: 694px;
  left: 2182px;
  background-color: var(--harlequin);
  border-radius: 130.5px;
`;

const EllipseCopy2 = styled.div`
  position: absolute;
  width: 299px;
  height: 299px;
  top: 675px;
  left: 1938px;
  background-color: var(--sunglo);
  border-radius: 149.5px;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 245px;
  height: 245px;
  top: 512px;
  left: 2030px;
  background-color: var(--frostbite);
  border-radius: 122.5px;
`;

const EllipseCopy = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  top: 329px;
  left: 2082px;
  background-color: var(--java);
  border-radius: 125px;
`;

const EllipseCopy4 = styled.div`
  position: absolute;
  width: 282px;
  height: 287px;
  top: 311px;
  left: 2276px;
  background-color: var(--eastern-blue);
  border-radius: 141px/143.5px;
`;

const Rectangle2 = styled.img`
  position: absolute;
  width: 975px;
  height: 685px;
  top: 291px;
  left: 1887px;
  background-color: var(--white-2);
`;

const NewShape = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 409px;
  left: 1949px;
`;

const NewShapeCopy = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 605px;
  left: 1935px;
`;

const NewShapeCopy2 = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 823px;
  left: 1886px;
`;

const Rectangle3 = styled.img`
  position: absolute;
  width: 491px;
  height: 472px;
  top: 521px;
  left: 2088px;
  object-fit: cover;
`;

const RealizaIntercambiosDeLibros = styled.div`
  ${NobileNormalEerieBlack66px}
  position: absolute;
  top: 366px;
  left: 904px;
  letter-spacing: 0;
`;

const LosIntercambiosDeLibrosCon = styled.div`
  ${AlataNormalEerieBlack27px}
  position: absolute;
  top: 606px;
  left: 904px;
  letter-spacing: 0;
`;

const Rectangle4 = styled.img`
  position: absolute;
  width: 244px;
  height: 56px;
  top: 756px;
  left: 1224px;
`;

const Empezar = styled.div`
  ${NobileBoldEerieBlack27px}
  position: absolute;
  top: 766px;
  left: 1292px;
  letter-spacing: 0;
`;

const LibrosParaTodos = styled.div`
  ${NobileBoldEerieBlack48px}
  position: absolute;
  top: 440px;
  left: 2141px;
  letter-spacing: 0;
`;

const Rectangle5 = styled.div`
  ${Border1pxBlack2}
  position: absolute;
  width: 294px;
  height: 41px;
  top: 155px;
  left: 2136px;
  background-color: var(--white);
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 27px;
  height: 27px;
  top: 162px;
  left: 2146px;
`;

const Ellipse6 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 64px;
  height: 64px;
  top: 143px;
  left: 2478px;
  background-color: var(--white);
  border-radius: 32px;
  cursor: pointer;
`;

const Object = styled.img`
  position: relative;
  width: 1721px;
  height: 164px;
  top: 30px;
  right: -810px;
`;


const Buscar = styled.div`
  ${InterNormalAlto18px}
  position: absolute;
  top: 164px;
  left: 2175px;
  text-align: right;
  letter-spacing: 0;
`;

const Rectangle5Copy = styled.div`
  position: absolute;
  width: 59px;
  height: 3px;
  top: 208px;
  left: 1638px;
  background-color: var(--black);
  border-radius: 4px;
`;

export default HomePage;

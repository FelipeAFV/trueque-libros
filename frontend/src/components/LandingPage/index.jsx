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
  InterNormalEerieBlack16px,
} from "../../styledMixins";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const {
      contenedorLogoCopy,
      inicio,
      quinesSomos,
      nuestraMisin,
      signUp,
      login,
      rectangle3,
      realizaIntercambiosDeLibros,
      losIntercambiosDeLibrosCon,
      empezar,
      librosParaTodos,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <OverlapGroup>
            <Group></Group>
            <ContenedorLogoCopy src={contenedorLogoCopy} />
            <Inicio>{inicio}</Inicio>
            <QuinesSomos>{quinesSomos}</QuinesSomos>
            <NuestraMisin>{nuestraMisin}</NuestraMisin>
            <Rectangle></Rectangle>
            <RectangleCopy></RectangleCopy>
            <Link to="/register">
              <SignUp>{signUp}</SignUp>
            </Link>
            <Link to="/login">
              <Login>{login}</Login>
            </Link>
            <EllipseCopy3></EllipseCopy3>
            <EllipseCopy5></EllipseCopy5>
            <EllipseCopy2></EllipseCopy2>
            <Ellipse></Ellipse>
            <EllipseCopy></EllipseCopy>
            <EllipseCopy4></EllipseCopy4>
            <Rectangle2 src="/img/rectangle-2@1x.svg" />
            <NewShape src="/img/new-shape@1x.svg" />
            <NewShapeCopy src="/img/new-shape-copy@1x.svg" />
            <NewShapeCopy2 src="/img/new-shape-copy-2@1x.svg" />
            <Rectangle3 src={rectangle3} />
            <RealizaIntercambiosDeLibros>{realizaIntercambiosDeLibros}</RealizaIntercambiosDeLibros>
            <LosIntercambiosDeLibrosCon>{losIntercambiosDeLibrosCon}</LosIntercambiosDeLibrosCon>
            <Rectangle4 src="/img/rectangle-4@2x.svg" />
            <Empezar>{empezar}</Empezar>
            <LibrosParaTodos>{librosParaTodos}</LibrosParaTodos>
            <Rectangle5></Rectangle5>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 2051px;
  height: 1080px;
  position: relative;
`;

const Group = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

const ContenedorLogoCopy = styled.img`
  position: absolute;
  width: 347px;
  height: 98px;
  top: 94px;
  left: 169px;
`;

const Inicio = styled.div`
  ${InterNormalEerieBlack24px}
  position: absolute;
  top: 129px;
  left: 827px;
  text-align: right;
  letter-spacing: 0;
`;

const QuinesSomos = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 132px;
  left: 1128px;
  text-align: right;
  letter-spacing: 0;
`;

const NuestraMisin = styled.div`
  ${InterNormalEerieBlack18px}
  position: absolute;
  top: 132px;
  left: 943px;
  text-align: right;
  letter-spacing: 0;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 88px;
  height: 40px;
  top: 123px;
  left: 1659px;
  background-color: var(--black);
  border-radius: 12px;
`;

const RectangleCopy = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 107px;
  height: 42px;
  top: 122px;
  left: 1527px;
  border-radius: 12px;
`;

const SignUp = styled.div`
  ${InterNormalEerieBlack16px}
  position: absolute;
  top: 134px;
  left: 1550px;
  text-align: right;
  letter-spacing: 0;
  cursor: pointer;
`;

const Login = styled.div`
  position: absolute;
  top: 134px;
  left: 1683px;
  font-family: var(--font-family-judson);
  font-weight: 700;
  color: #f5d1d1;
  font-size: 16px;
  text-align: right;
  letter-spacing: 0;
  cursor: pointer;
`;

const EllipseCopy3 = styled.div`
  position: absolute;
  width: 219px;
  height: 229px;
  top: 496px;
  left: 1453px;
  background-color: var(--conifer);
  border-radius: 109.5px/114.5px;
`;

const EllipseCopy5 = styled.div`
  position: absolute;
  width: 261px;
  height: 261px;
  top: 662px;
  left: 1372px;
  background-color: var(--harlequin);
  border-radius: 130.5px;
`;

const EllipseCopy2 = styled.div`
  position: absolute;
  width: 299px;
  height: 299px;
  top: 643px;
  left: 1128px;
  background-color: var(--sunglo);
  border-radius: 149.5px;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 245px;
  height: 245px;
  top: 480px;
  left: 1220px;
  background-color: var(--frostbite);
  border-radius: 122.5px;
`;

const EllipseCopy = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  top: 297px;
  left: 1272px;
  background-color: var(--java);
  border-radius: 125px;
`;

const EllipseCopy4 = styled.div`
  position: absolute;
  width: 282px;
  height: 287px;
  top: 279px;
  left: 1465px;
  background-color: var(--eastern-blue);
  border-radius: 141px/143.5px;
`;

const Rectangle2 = styled.img`
  position: absolute;
  width: 975px;
  height: 685px;
  top: 259px;
  left: 1076px;
  background-color: var(--white-2);
`;

const NewShape = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 377px;
  left: 1138px;
`;

const NewShapeCopy = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 573px;
  left: 1124px;
`;

const NewShapeCopy2 = styled.img`
  position: absolute;
  width: 855px;
  height: 112px;
  top: 791px;
  left: 1075px;
`;

const Rectangle3 = styled.img`
  position: absolute;
  width: 491px;
  height: 472px;
  top: 489px;
  left: 1277px;
  object-fit: cover;
`;

const RealizaIntercambiosDeLibros = styled.h1`
  ${NobileNormalEerieBlack66px}
  position: absolute;
  top: 334px;
  left: 93px;
  letter-spacing: 0;
`;

const LosIntercambiosDeLibrosCon = styled.div`
  ${AlataNormalEerieBlack27px}
  position: absolute;
  top: 574px;
  left: 93px;
  letter-spacing: 0;
`;

const Rectangle4 = styled.img`
  position: absolute;
  width: 244px;
  height: 56px;
  top: 724px;
  left: 414px;
`;

const Empezar = styled.div`
  ${NobileBoldEerieBlack27px}
  position: absolute;
  top: 734px;
  left: 481px;
  letter-spacing: 0;
`;

const LibrosParaTodos = styled.div`
  ${NobileBoldEerieBlack48px}
  position: absolute;
  top: 408px;
  left: 1330px;
  letter-spacing: 0;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 59px;
  height: 3px;
  top: 176px;
  left: 828px;
  background-color: var(--black);
  border-radius: 4px;
`;

export default LandingPage;

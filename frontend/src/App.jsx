
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|landing-page)">
            <LandingPage {...landingPageData} />
          </Route>
          <Route path="/profile">
            <Profile {...profileData} />
          </Route>
          <Route path="/login">
            <Login {...loginData} />
          </Route>
          <Route path="/register">
            <Register {...registerData} />
          </Route>
          <Route path="/home-page">
            <HomePage {...homePageData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const landingPageData = {
    contenedorLogoCopy: "/img/contenedor-logo-copy@2x.png",
    inicio: "Inicio",
    quinesSomos: "¿Quiénes somos?",
    nuestraMisin: "Nuestra misión",
    signUp: "Sign Up",
    login: "Login",
    rectangle3: "/img/rectangle-3@2x.png",
    realizaIntercambiosDeLibros: <>Realiza intercambios de libros<br />de forma segura</>,
    losIntercambiosDeLibrosCon: <>Los intercambios de libros con otras personas son de forma segura y se encuentran<br />bajo control de nuestro equipo de desarrollo. Comienza a buscar tu libro deseado y <br />ayuda al planeta a reducir la cantidad de elaboración masiva de estos.</>,
    empezar: "Empezar",
    librosParaTodos: "Libros para todos",
};

const profileData = {
    contenedorLogoCopy: "/img/contenedor-logo-copy@2x.png",
    inicio: "Inicio",
    quinesSomos: "¿Quiénes somos?",
    nuestraMisin: "Nuestra misión",
    buscar: "Buscar",
    starIcon: "/img/star-icon@2x.png",
    starIconCopy: "/img/star-icon@2x.png",
    starIconCopy2: "/img/star-icon@2x.png",
    starIconCopy3: "/img/star-icon@2x.png",
    starIconCopy4: "/img/star-icon@2x.png",
    rectangle8: "/img/rectangle-8@2x.png",
    cambiarFoto: "Cambiar foto",
    miPerfil: "Mi Perfil",
    nombreNombreCopy: "Nombre: nombre",
    apellidoApellido: "Apellido: apellido",
    apellidoApellidoCopy: "Apellido: apellido",
    emailTuemailCorreoCl: "Email: tuemail@correo.cl",
    valoracin: "Valoración",
    emailTuemailCorreoClCopy: "Email: tuemail@correo.cl",
    guardar: "Guardar",
    nombreNombre: "Nombre: nombre",
};

const loginData = {
    contenedorLogo: "/img/contenedor-logo@2x.png",
    contenedorLadoDerecho: "/img/contenedor-lado-derecho@1x.png",
    usuario: "Usuario",
    usuarioCopy: "TuUsuario",
    usuarioCopy2: "••••••••••••",
    iniciarSesin: "Iniciar Sesión",
    nuestroDeseo: "Nuestro deseo",
    intercambiaTuLibroPorUnoD: <>Intercambia tu libro por uno de interés<br />con otras personas y ayuda al mundo <br />a disminuir la deforestación. Con esto <br />esperamos reducir la elaboración <br />masiva de libros y conservar los ya <br />existentes en buen cuidado y para los<br />demás.</>,
    contrasea: "Contraseña",
    noTienesCuenta: "¿No tienes cuenta?",
    registrate: "Regístrate",
    iniciar: "Iniciar",
    intercambiaTuLibro: "Intercambia tu libro por uno de interés con otras personas y ayuda al mundo a disminuir la deforestación. Con esto esperamos reducir la elaboración masiva de libros y conservar los ya existentes en buen cuidado y para los demás.",
};

const registerData = {
    usuario: "Nombre",
    usuarioCopy: "nombre",
    usuarioCopy3: "Apellido",
    usuarioCopy4: "apellido",
    contenedorLogo: "/img/contenedor-logo@2x.png",
    usuarioCopy5: "Email",
    contenedorLadoDerecho: "/img/contenedor-lado-derecho-1@1x.png",
    usuarioCopy6: "email",
    usuarioCopy2: "contraseña",
    regstrate: "Regístrate",
    nuestroDeseo: "Nuestro deseo",
    intercambiaTuLibroPorUnoD: <>Intercambia tu libro por uno de interés<br />con otras personas y ayuda al mundo <br />a disminuir la deforestación. Con esto <br />esperamos reducir la elaboración <br />masiva de libros y conservar los ya <br />existentes en buen cuidado y para los<br />demás.</>,
    contrasea: "Contraseña",
    noTienesCuenta: "¿Ya tienes cuenta?",
    registrate: "Iniciar Sesión",
    regstrate2: "Regístrate",
    intercambiaTuLibro: <>Intercambia tu libro por uno de interés con otras personas y ayuda al mundo a disminuir la deforestación. Con esto esperamos reducir la elaboración <br />masiva de libros y conservar los ya existentes en buen cuidado y para los demás.</>,
};

const homePageData = {
    contenedorLogoCopy: "/img/contenedor-logo-copy@2x.png",
    inicio: "Inicio",
    quinesSomos: "¿Quiénes somos?",
    nuestraMisin: "Nuestra misión",
    rectangle3: "/img/rectangle-3@2x.png",
    realizaIntercambiosDeLibros: <>Realiza intercambios de libros<br />de forma segura</>,
    losIntercambiosDeLibrosCon: <>Los intercambios de libros con otras personas son de forma segura y se encuentran<br />bajo control de nuestro equipo de desarrollo. Comienza a buscar tu libro deseado y <br />ayuda al planeta a reducir la cantidad de elaboración masiva de estos.</>,
    empezar: "Empezar",
    librosParaTodos: "Libros para todos",
    buscar: "Buscar",
};


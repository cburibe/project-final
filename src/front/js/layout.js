import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import FormRegistro from "./pages/formulario/registro";
import { Mainpage } from "./pages/mainpage/mainpage";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import MyMap from "./pages/Map/view.map";
import ReactPlayer from "react-player";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Mainpage />
            </Route>
            <Route exact path="/registro">
              <FormRegistro />
            </Route>
            <Route exact path="/map">
              <MyMap />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FormRegistro from "./pages/formulario/registro";
import { Mainpage } from "./pages/mainpage/mainpage";

import { Profile } from "./pages/profileclient/profile";

import { Feed } from "./pages/feedclient/feed.js";
import { Publication_uploader } from "./pages/create_publication/publication_uploader.js";
import { Config } from "./pages/config";
import { RecommendedHotels } from "./pages/recommendedHotels";
import injectContext from "./store/appContext";

import { Menu } from "./component/navbar";
import { Footer } from "./component/footer";
import MyMap from "./pages/Map/view.map";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Menu />
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
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/recommendedhotels">
            <RecommendedHotels />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/publication_uploader">
            <Publication_uploader />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default injectContext(Layout);

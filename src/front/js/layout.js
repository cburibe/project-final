import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "./pages/profileclient/profile";
import { Feed } from "./pages/feedclient/feed.js";
import { Publication_uploader } from "./pages/create_publication/publication_uploader.js";
import { Config } from "./pages/config";
import { RecommendedHotels } from "./pages/recommendedHotels";
import MyMap from "./pages/Map/view.map";
import injectContext from "./store/appContext";
import { Mainpage } from "./pages/mainpage/mainpage";
import Goback from "./pages/Map/goback";
import { Login } from "./pages/login";
import { Demo } from "./pages/profileclient/demo";
import { Prueba } from "./pages/prueba";
import { Menu } from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <Menu />
            <Mainpage />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/map">
            <Goback />
            <MyMap />
          </Route>
          <Route exact path="/recommendedhotels">
            <RecommendedHotels />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/publication_uploader">
            <Publication_uploader />
          </Route>
          <Route>
            <Prueba />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default injectContext(Layout);

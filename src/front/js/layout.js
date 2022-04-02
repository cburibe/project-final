import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Config } from "./pages/config";
import injectContext from "./store/appContext";
import { Mainpage } from "./pages/mainpage/mainpage";
import Goback from "./pages/Map/goback";
import ScrollToTop from "./component/scrollToTop";
import Mainpage from "./pages/mainpage/mainpage";
import NewLogin from "./pages/mainpage/newlogin";
import Perfil from "./pages/perfil/perfiluser";
import Feed from "./pages/mainpage/newfeed/newfeed";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Mainpage />
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
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/login">
            <NewLogin />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
          <Route exact path="/perfil">
            <Perfil />
          </Route>
          <Route exact path="/feed">
            <Feed />
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

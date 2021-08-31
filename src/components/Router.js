import React from "react";
import {
    HashRouter as HRouter,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import TVshows from "../routes/TVshows";
import Search from "../routes/Search";
import Details from "../routes/Details";

const baseUrl = "https://junghyomoon.github.io/Hyoflix";

const Router = () => (
    <HRouter>
        <>
            <Header />
            <Switch>
                <Route path={`/`} exact component={Home} />
                <Route path={`/tv`} exact component={TVshows} />
                <Route path={`/search`} component={Search} />
                <Route path={`/movie/:id`} component={Details} />
                <Route path={`/tv/:id`} component={Details} />
                <Redirect from="*" to={`/`} />
            </Switch>
        </>
    </HRouter>
);
// Redirect: 일치하는 url이 없을 경우 / 으로 보내 버림.

export default Router;

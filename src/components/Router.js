import React from "react";
import {
    BrowserRouter as BRouter,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Routes/Home";
import TVshows from "../Routes/TVshows";
import Search from "../Routes/Search";
import Details from "../Routes/Details";

const Router = () => (
    <BRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TVshows} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Details} />
                <Route path="/tv/:id" component={Details} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </BRouter>
);
// Redirect: 일치하는 url이 없을 경우 / 으로 보내 버림.

export default Router;

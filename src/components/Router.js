import React from "react";
import {
    BrowserRouter as BRouter,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../routes/Home";
import TV from "../routes/TVshows";
import Search from "../routes/Search";
import Details from "../routes/Details";

const Router = () => (
    <BRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Details} />
                <Route path="/show/:id" component={Details} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </BRouter>
);
// Redirect: 일치하는 url이 없을 경우 / 으로 보내 버림.

export default Router;

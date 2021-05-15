import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Home from "../routes/Home";
import TV from "../routes/TVshows";
import Search from "../routes/Search";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

// Redirect: 일치하는 url이 없을 경우 / 으로 보내 버림.

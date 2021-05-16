import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

const Slink = styled(Link)``;

export default () => (
    <header>
        <List>
            <li>
                <Slink to="/">Movies</Slink>
            </li>
            <li>
                <Slink to="/tv">TV</Slink>
            </li>
            <li>
                <Slink to="/search">Search</Slink>
            </li>
        </List>
    </header>
);

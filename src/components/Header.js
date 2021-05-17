import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid
        ${(props) => (props.current ? "#3498db" : "transparant")};
`;

const Slink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = () => (
    <Sheader>
        <List>
            <Item current={true}>
                <Slink to="/">Movies</Slink>
            </Item>
            <Item current={true}>
                <Slink to="/tv">TV</Slink>
            </Item>
            <Item current={true}>
                <Slink to="/search">Search</Slink>
            </Item>
        </List>
    </Sheader>
);

export default Header;
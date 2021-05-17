import React from "react";
import { Link, withRouter } from "react-router-dom";
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
    transition: border-bottom 0.3s ease-in-out;
`;

const Slink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
    <Sheader>
        <List>
            <Item current={pathname === "/"}>
                <Slink to="/">Movies</Slink>
            </Item>
            <Item current={pathname === "/tv"}>
                <Slink to="/tv">TV</Slink>
            </Item>
            <Item current={pathname === "/search"}>
                <Slink to="/search">Search</Slink>
            </Item>
        </List>
    </Sheader>
);

// 어떤 컴포넌트와도 연결할 수 있는 withRouter?
export default withRouter(Header);

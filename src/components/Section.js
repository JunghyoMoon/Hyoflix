import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fill, 125px);
`;

/*
children은 예약되어 있는 react prop임.(기본적으로 제공됨.)
하위 항목들이 자동적으로 children으로 귀속됨?
*/
const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;

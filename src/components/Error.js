import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: #e74c3c;
    font-weight: 600;
`;

const Error = ({ text }) => (
    <Container>
        <Text>{text}</Text>
    </Container>
);

Error.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Error;

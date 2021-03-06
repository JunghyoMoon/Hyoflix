import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: ${(props) => props.color};
    font-weight: 600;
`;

const Message = ({ text, color }) => (
    <Container>
        <Text>{text}</Text>
    </Container>
);

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Message;

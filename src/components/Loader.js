import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    margin-top: 20px;
`;

const Span = styled.span`
    font-size: 60px;

    :not(:first-child) {
        margin-top: 15px;
        font-size: 30px;
        font-weight: 400;
    }
`;

const Loader = () => (
    <Container>
        <Span role="img" aria-label="Loading">
            ⏰
        </Span>
        <Span aria-label="Loading">Loading...</Span>
    </Container>
);

export default Loader;

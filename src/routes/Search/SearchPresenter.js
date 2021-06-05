import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Error from "../../Components/Error";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    font-size: 28px;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    handleSubmit,
    updateTerm,
    error,
}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or Shows..."
                value={searchTerm}
                onChange={updateTerm}
            ></Input>
        </Form>
        {loading ? (
            <Loader />
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movies Results">
                        {movieResults.map((movie) => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Shows Results">
                        {tvResults.map((show) => (
                            <span key={show.id}>{show.name}</span>
                        ))}
                    </Section>
                )}
                {error && <Error text={error} />}
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default SearchPresenter;

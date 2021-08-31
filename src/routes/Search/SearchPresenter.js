import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
    width: 100%;
    padding: 0px 20px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    width: 30%;
    border-bottom: 1px solid white;
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
        <Helmet>
            <title>Search | Hyoflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or Shows..."
                value={searchTerm}
                onChange={updateTerm}
            ></Input>
        </Form>
        {loading ? (
            <>
                <Helmet>
                    <title>Loading... | Hyoflix</title>
                </Helmet>
                <Loader />
            </>
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movies Results">
                        {movieResults.map((movie) => (
                            <Poster
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                year={
                                    movie.release_date &&
                                    movie.release_date.substring(0, 4)
                                }
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Shows Results">
                        {tvResults.map((show) => (
                            <Poster
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.original_name}
                                rating={show.vote_average}
                                year={
                                    show.first_air_date &&
                                    show.first_air_date.substring(0, 4)
                                }
                            />
                        ))}
                    </Section>
                )}
                {error && <Message text={error} color="#e74c3c" />}
                {tvResults &&
                    movieResults &&
                    tvResults.length === 0 &&
                    movieResults.length === 0 && (
                        <Message
                            text={`Nothing Found.. for: ${searchTerm}`}
                            color="#95a5a6"
                        />
                    )}
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

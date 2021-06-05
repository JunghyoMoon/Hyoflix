import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Container = styled.div`
    margin-top: 50px;
    padding: 0px 20px;
`;

//데이터가 로딩 되었는지를 항상 확인할 것.
const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    {upcoming.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {popular.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {error && <Error text={error} />}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default HomePresenter;

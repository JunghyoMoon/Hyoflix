import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
    padding: 20px;
`;

//데이터가 로딩 되었는지를 항상 확인할 것.
const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading... | Hyoflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>Movies | Hyofilx</title>
            </Helmet>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map((movie) => (
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
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    {upcoming.map((movie) => (
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
            {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {popular.map((movie) => (
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
            {error && <Message text={error} color="#e74c3c" />}
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

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

const TVshowsPresenter = ({ topRated, popular, airingToday, loading, error }) =>
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
                <title>TV Shows | Hyofilx</title>
            </Helmet>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map((show) => (
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
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map((show) => (
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
            {airingToday && airingToday.length > 0 && (
                <Section title="Shows Airing Today">
                    {airingToday.map((show) => (
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
        </Container>
    );

TVshowsPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TVshowsPresenter;

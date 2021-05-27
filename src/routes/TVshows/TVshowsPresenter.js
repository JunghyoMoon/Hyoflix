import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";

const Container = styled.div`
    padding: 0px 10px;
    margin-top: 50px;
`;

const TVshowsPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? null : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map((show) => show.name)}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map((show) => show.name)}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Shows Airing Today">
                    {airingToday.map((show) => show.name)}
                </Section>
            )}
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

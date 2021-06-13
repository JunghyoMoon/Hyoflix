import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(5px);
    opacity: 0.5;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
`;

const Rate = styled.h3`
    font-size: 18px;
    margin-bottom: 30px;
`;

const ItemContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const Item = styled.span`
    font-size: 15px;
    font-weight: 400;
    a {
        &:hover {
            opacity: 0.6;
        }
        transition: opacity 0.1s ease-in-out;
    }
    img {
        width: 30px;
        height: 23px;
    }
`;

const Divider = styled.span`
    margin: 0px 5px;
`;

const Overview = styled.p`
    width: 50%;
    line-height: 1.5;
`;

/*
const Video = styled.iframe`
    width: 250px;
    height: 200px;
`;
*/

const stars = (rate) => {
    const intRate = parseInt(rate / 2);
    const others = 5 - intRate;
    return `${"★".repeat(intRate)}${"☆".repeat(others)}`;
};

const DetailsPresenter = ({ result, error, loading, isMovie }) => {
    return loading ? (
        <>
            <Helmet>
                <title>Loading... | Hyoflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.original_title
                        ? result.original_title
                        : result.original_name}
                    &#32; | Hyofilx
                </title>
            </Helmet>
            <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/noPosterSmall.png")
                    }
                />
                <Data>
                    <Title>
                        {result.original_title
                            ? result.original_title
                            : result.original_name}
                    </Title>
                    <Rate>{`${result.vote_average} ${stars(
                        result.vote_average
                    )}`}</Rate>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.runtime
                                ? `${result.runtime} min`
                                : `${result.episode_run_time[0]} min`}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                    index === result.genres.length - 1
                                        ? genre.name
                                        : `${genre.name} / `
                                )}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {isMovie ? (
                                <a
                                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                                >
                                    <img
                                        src="https://cdn0.iconfinder.com/data/icons/social-media-logo-4/32/Social_Media_imdb-512.png"
                                        alt="IMDB"
                                    />
                                </a>
                            ) : (
                                <a href={result.homepage}>
                                    <span>Homepage</span>
                                </a>
                            )}
                        </Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
        </Container>
    );
};

DetailsPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailsPresenter;

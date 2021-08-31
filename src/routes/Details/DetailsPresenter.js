import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";

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
    align-items: center;
    margin-bottom: 15px;
    font-size: 15px;
    text-align: center;
`;

const Item = styled.span`
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    a {
        &:hover {
            opacity: 0.6;
        }
        transition: opacity 0.1s ease-in-out;

        img {
            width: 60px;
            height: 50px;
        }
    }
    img {
        width: 40px;
        height: 40px;
        align-self: center;
    }
`;

const Country = styled.span`
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    margin: 0px 10px;
`;

const Divider = styled.span`
    margin: 0px 5px;
    text-align: center;
`;

const Overview = styled.p`
    width: 50%;
    line-height: 1.5;
`;

const VideoContainer = styled.div`
    margin-top: 5%;
    width: 100%;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 320px);
    grid-template-rows: 180px;
`;

const Video = styled.iframe`
    width: 100%;
    height: 100%;
`;

const SeasonsList = styled.div`
    display: flex;
    margin-top: 30px;
    width: 80%;
    overflow-y: hidden;
    // hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Season = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
        margin-left: 0px;
    }
    img {
        width: 100px;
        height: 150px;
        border-radius: 3px;
        margin-bottom: 6px;
    }
    span {
        font-size: 13px;
        font-weight: 400;
    }
`;

const Companies = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    img {
        height: min-content;
        width: 70px;
        margin-left: 15px;
        &:first-child {
            margin-left: 0px;
        }
    }
`;

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
                    {`${
                        result.original_title
                            ? result.original_title
                            : result.original_name
                    } | Hyofilx`}
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
                            {result.imdb_id ? (
                                <a
                                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fuiconstock%2Fsocialmedia%2F512%2FIMDb-icon.png&f=1&nofb=1"
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
                    <ItemContainer>
                        production countries:{`     `}
                        {result.production_countries
                            ? result.production_countries.map(
                                  (country, index) =>
                                      index ===
                                      result.production_countries.length - 1
                                          ? country.name
                                          : `${country.name} / `
                              )
                            : "??"}
                    </ItemContainer>
                    <Companies>
                        {result.production_companies.map(
                            (company) =>
                                company.logo_path && (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                                        alt={company.name}
                                    />
                                )
                        )}
                    </Companies>
                    <Overview>{result.overview}</Overview>
                    <VideoContainer>
                        {result.videos
                            ? result.videos.results.map(
                                  (movie, index) =>
                                      index <= 2 && (
                                          <Video
                                              key={movie.id}
                                              src={`https://www.youtube.com/embed/${movie.key}`}
                                              allowFullScreen
                                          />
                                      )
                              )
                            : null}
                    </VideoContainer>
                    <SeasonsList>
                        {result.seasons
                            ? result.seasons.map((season) => (
                                  <Season>
                                      <img
                                          src={
                                              season.poster_path &&
                                              season.poster_path !== null
                                                  ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                                  : require("../../assets/noPosterSmall.png")
                                          }
                                          alt={season.season_number}
                                      ></img>
                                      <span>{`season ${season.season_number}`}</span>
                                  </Season>
                              ))
                            : null}
                    </SeasonsList>
                </Data>
            </Content>
        </Container>
    );
};

DetailsPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    isMovie: PropTypes.bool.isRequired,
};

export default DetailsPresenter;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${(props) => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s ease-in-out;
`;

const Rating = styled.span`
    position: absolute;
    top: 10px;
    left: 5px;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.55);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                            : require("../assets/noPosterSmall.png")
                    }
                />
                <Rating>
                    <span role="img" aria-label="Review Rating">
                        ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>
                {title.length > 17 ? `${title.substring(0, 17)}...` : title}
            </Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;

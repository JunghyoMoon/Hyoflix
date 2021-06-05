import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl} />
                <Rating>
                    <span role="img" aria-label="Review Rating">
                        ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
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

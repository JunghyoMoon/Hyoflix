import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    handleSubmit,
    error,
}) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default SearchPresenter;

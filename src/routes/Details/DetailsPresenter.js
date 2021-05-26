import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailsPresenter = ({ result, error, loading }) => null;

DetailsPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailsPresenter;

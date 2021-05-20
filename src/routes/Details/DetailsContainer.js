import React from "react";
import DetailsPresenter from "./DetailsPresenter";

class DetailsContainer extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true,
    };

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailsPresenter result={result} error={error} loading={loading} />
        );
    }
}

export default DetailsContainer;

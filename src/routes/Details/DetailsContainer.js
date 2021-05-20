import React from "react";
import DetailsPresenter from "./DetailsPresenter";

class DetailsContainer extends React.Component {
    state = {
        // id를 가지고 결과를 보여줄 예정
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

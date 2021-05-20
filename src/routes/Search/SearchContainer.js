import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        // 사용자가 검색하기 전까지는 어느것도 로드하지 않음.
        loading: false,
        error: null,
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } =
            this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        );
    }
}

export default SearchContainer;

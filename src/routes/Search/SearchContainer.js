import React from "react";
import { moviesApi, tvApi } from "../../api";
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

    searchByTerm = async (term) => {
        this.setState({ loading: true });
        try {
            const {
                data: { results: movieResults },
            } = await moviesApi.search(term);
            const {
                data: { results: tvResults },
            } = await tvApi.search(term);
            this.setState({ movieResults, tvResults });
        } catch {
            this.setState({ error: "Can't find results!" });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
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
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default SearchContainer;

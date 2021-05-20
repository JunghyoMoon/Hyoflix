import React from "react";
import TVshowsPresenter from "./TVshowsPresenter";

class TVshowsContainer extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null,
    };

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        return (
            <TVshowsPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}

export default TVshowsContainer;

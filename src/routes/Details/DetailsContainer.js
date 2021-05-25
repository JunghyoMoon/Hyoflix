import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailsPresenter from "./DetailsPresenter";

class DetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: { pathname },
        } = props;
        this.state = {
            // id를 가지고 결과를 보여줄 예정
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/"),
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if (isMovie) {
                const request = await moviesApi.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parsedId);
                result = request.data;
            }
            console.log(result);
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result });
        }
    }
    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailsPresenter result={result} error={error} loading={loading} />
        );
    }
}

export default DetailsContainer;

import React from "react";
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
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        this.isMovie = pathname.includes("/movie/");
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
    }

    render() {
        console.log(this.props);
        const { result, error, loading } = this.state;
        return (
            <DetailsPresenter result={result} error={error} loading={loading} />
        );
    }
}

export default DetailsContainer;

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        language: "en-US",
    },
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos",
            },
        }),
    search: (term) =>
        api.get("search/movie", {
            params: {
                // encodeURIComponent : 어떤 값을 넘기든 그 값을 인코딩하여, 완성된 문자열로 검색할 것임.
                // 검색이 안된다면, axios가 기본적으로 encode하고 있지 않은지 생각해볼 것.
                query: encodeURIComponent(term),
            },
        }),
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos",
            },
        }),
    search: (term) =>
        api.get("search/tv", {
            params: {
                // encodeURIComponent : 어떤 값을 넘기든 그 값을 인코딩하여, 완성된 문자열로 검색할 것임.
                query: encodeURIComponent(term),
            },
        }),
};

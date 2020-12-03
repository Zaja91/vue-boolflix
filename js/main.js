const vm = new Vue({
  el: "#root",
  data: {
    searchInput: "",
    apiKey: "32e8184f903a507d4bd6355d60175cc1",
    moviesApiUrl: "https://api.themoviedb.org/3/search/movie",
    tvShowsApiUrl: "https://api.themoviedb.org/3/search/tv",
    movies: [],
    tvShows: [],
  },
  methods: {
    buildQuery: function () {
      return {
        params: {
          api_key: this.apiKey,
          query: this.searchInput.trim(),
        },
      };
    },
    transformVote: function (value) {
      return Math.ceil(value / 2);
    },
    searchMovies: function () {
      axios.get(this.moviesApiUrl, this.buildQuery()).then((r) => {
        this.movies = r.data.results;
      });
    },
    searchTvShows: function () {
      axios.get(this.tvShowsApiUrl, this.buildQuery()).then((r) => {
        this.tvShows = r.data.results;
        this.searchInput = "";
      });
    },
  },
});

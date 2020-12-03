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
    query: function () {
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
      if (this.searchInput !== "") {
        axios.get(this.moviesApiUrl, this.query()).then((r) => {
          this.movies = r.data.results;
        });
      }
    },
    searchTvShows: function () {
      if (this.searchInput !== "") {
        axios.get(this.tvShowsApiUrl, this.query()).then((r) => {
          this.tvShows = r.data.results;
          this.searchInput = "";
        });
      }
    },
  },
});

const vm = new Vue({
  el: "#root",
  data: {
    searchInput: "",
    apiKey: "32e8184f903a507d4bd6355d60175cc1",
    moviesApiUrl:
      "https://api.themoviedb.org/3/search/movie",
    movies: [],
  },
  methods: {
    buildQuery: function () {
      return {params: {
          'api_key': this.apiKey,
          query: this.searchInput.trim(),
      }};
    },

    searchMovies: function () {
      axios.get(this.moviesApiUrl, this.buildQuery()).then((r) => {
        this.searchInput = "";
        this.movies = r.data.results;
      });
    },
  },
});

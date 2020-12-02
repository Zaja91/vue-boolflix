const vm = new Vue({
  el: "#root",
  data: {
    searchInput: "",
    moviesApiUrl:
      "https://api.themoviedb.org/3/search/movie?api_key=32e8184f903a507d4bd6355d60175cc1",
    movies: [],
  },
  methods: {
    buildUrl: function() {
        return this.moviesApiUrl + "&query=" + this.searchInput.trim();
    },

    searchMovies: function () {
      axios.get(this.buildUrl()).then((r) => {
          this.movies = r.data.results
      });
    },
  },
  mounted() {},
});

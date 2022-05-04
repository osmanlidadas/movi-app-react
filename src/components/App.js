import * as React from "react";
import axios from "axios";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const baseURL = "http://localhost:3002/movies/";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  componentDidMount() {
    this.getMovies();
  }

  // GET MOVIES
  async getMovies() {
    await axios.get(baseURL).then((r) => {
      this.setState({ movies: r.data });
    });
  }

  // SEARCH MOVIE
  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // DELETE MOVIE
  deleteMovie = (movie) => {
    MySwal.fire({
      text: "Silmek istediğinizden emin misiniz?",
      showCancelButton: true,
      icon: 'info',
      confirmButtonText: "Evet Sil",
      cancelButtonText: `Hayır`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(baseURL + movie.id);
        const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
        this.setState(() => ({ movies: newMovieList }));
         MySwal.fire({
          text: "Silindi!",
          icon: 'success',
          confirmButtonText: "Tamam",
          timer:3000
        })
      }
    });
  };


  render() {
    const filteredMovies = this.state.movies.filter((f) =>
      f.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    return (
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;

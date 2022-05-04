import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const baseURL = "http://localhost:3002/movies/";
const id = window.location.pathname.replace("/edit/", "");

class EditMovie extends React.Component {
constructor(){
    super()
    this.state = {
        title: '',
        year: '',
        director: '',
        actors: '',
        posterUrl: '',
        plot: ''
      };
}

  async componentDidMount() {
    
    const response = await axios.get(baseURL+id);
    const movie = response.data;
    
    this.setState({
      title: movie.title,
      year: movie.year,
      director: movie.director,
      actors: movie.actors,
      posterUrl: movie.posterUrl,
      plot: movie.plot,
    });
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { title, year, director, actors, posterUrl, plot } = this.state;
    const updatedMovie = { title, year, director, actors, posterUrl, plot };

    axios.put(baseURL + id, updatedMovie);
    MySwal.fire({
        title: <strong>Başarılı!</strong>,
        html: <i>Değişiklikler kaydedildi.</i>,
        icon: 'success',
        confirmButtonText: "Tamam",
        timer:3000
      }).then(()=>{
        window.location.href="/";
      })
  };


  render() {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="card-header">Fill The Form To Add A Movie..</div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-10">
                  <label>Title</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.onInputChange}
                  />
                </div>
                <div className="form-group col-2">
                  <label htmlFor="inputRating">Year</label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    name="year"
                    value={this.state.year}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-4">
                  <label>Director</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="director"
                    value={this.state.director}
                    onChange={this.onInputChange}
                  />
                </div>
                <div className="form-group col-8">
                  <label>Actors</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="actors"
                    value={this.state.actors}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label>Poster URL</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="posterUrl"
                    value={this.state.posterUrl}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="plot">Plot</label>
                  <textarea
                    required
                    className="form-control"
                    name="plot"
                    rows="5"
                    onChange={this.onInputChange}
                    value={this.state.plot}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="card-footer justify-items-center">
              <input
                type="submit"
                className="btn btn-danger btn-block m-1"
                value="Edit Movie"
              />
              <Link to="/" className="btn btn-primary m-1" type="button">
                <BsHouseDoor /> Go Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditMovie;

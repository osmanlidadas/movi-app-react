import React from "react";
import axios from "axios";
import serialize from "form-serialize";
import { Link  } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)
const baseURL = "http://localhost:3002/movies/";

class AddMovie extends React.Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
      axios.post(baseURL, newMovie).then(()=>{
         MySwal.fire({
            title: <strong>Başarılı!</strong>,
            html: <i>Yeni film başarıyla kaydedildi.</i>,
            icon: 'success',
            confirmButtonText: "Tamam",
            timer:3000
          })
    });
  };

  // ADD MOVIE
  addMovie = async (movie) => {
    await axios.post(baseURL, movie);
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
                  <input type="text" required className="form-control" name="title" />
                </div>
                <div className="form-group col-2">
                  <label htmlFor="inputRating">Year</label>
                  <input type="number" required className="form-control" name="year" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-4">
                  <label>Director</label>
                  <input type="text" required className="form-control" name="director" />
                </div>
                <div className="form-group col-8">
                  <label>Actors</label>
                  <input type="text" required className="form-control" name="actors" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label>Poster URL</label>
                  <input required
                    type="text"
                    className="form-control"
                    name="posterUrl"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="plot">Plot</label>
                  <textarea required
                    className="form-control"
                    name="plot"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="card-footer justify-items-center">
              <input
                type="submit"
                className="btn btn-danger btn-block m-1"
                value="Add Movie"
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
export default AddMovie;

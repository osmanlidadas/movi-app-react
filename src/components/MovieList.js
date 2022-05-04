import React from "react";
import { BsFillTrashFill, BsFillCalendarCheckFill,BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

function MovieList(props) {
  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-sm-12 col-md-6 col-lg-3" key={i}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.posterUrl}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-header">
              <div className="row">
                <div className="col-sm-10 col-md-9 col-lg-8">
                  <div className="d-inline-flex card-title"> {movie.title}</div>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4">
                  <span className="float-right badge bg-warning">
                    <BsFillCalendarCheckFill /> {movie.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text min-h-2" style={{minHeight:"150px"}}>{movie.plot}</p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
            <div className="card-footer text-muted">
              <button
                type="button"
                className="btn btn-sm btn-danger me-1"
                onClick={(event) => props.deleteMovieProp(movie)}
              >
                <BsFillTrashFill /> Delete
              </button>
              <Link
            to={`edit/${movie.id}`}
              className="btn btn-sm btn-primary"
              type="button"
            >
             <BsPencilSquare/> Edit
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;

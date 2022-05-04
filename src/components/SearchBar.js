import React from "react";
import { BsPlayBtnFill } from "react-icons/bs";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
        
          <div className="input-group mb-3">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Seach a movie"
            />
            <Link
            to="/add"
              className="btn btn-primary"
              type="button"
            >
             <BsPlayBtnFill/> Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;

import React, {Component} from "react";
import API from "../utils/API";

class Search extends Component {

  state = {
    search: "",
    breedsList: [],
    breedResults: [],
    error: ""
  }

  componentDidMount() {
    this.getBreedsList();
  }

  getBreedsList = () => {
    API.getDogBreeds()
      .then(res => this.setState({breedsList: res.data.message}))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message)
        }
        this.setState({
          breedResults: res.data.message,
          error: ""
        });
      })
      .catch(err => this.setState({error: err.message}))
  }

  render() {
    return (
      <div className="container my-5">
        <h1>Search for a doggo</h1>

        <form>
          <div className="form-group">
            <label htmlFor="breedsList">Breed Name:</label>
            <input 
              list="breeds" 
              type="text" 
              className="form-control"
              id="breedsList"
              name="search"
              value={this.state.search}
              onChange={this.handleInputChange}
            />
            <datalist id="breeds">
              {this.state.breedsList.map(breed => <option value={breed} key={breed} />)}
            </datalist>

            <button
              type="submit"
              onClick={this.handleFormSubmit}
              className="btn btn-success"
            >
              Search
            </button>
          </div>
        </form>

        <div className="row">
          {
            this.state.error 
            ? 
            (<h1>{this.state.error}</h1>) 
            :
            (
              this.state.breedResults.map(breedImage => (
              <div className="col-3" key={breedImage}>
                <img src={breedImage} alt="Doggo" className="img-fluid" />
              </div>
              )
            )
            )
          }
        </div>
      </div>
    )
  }
}

export default Search;
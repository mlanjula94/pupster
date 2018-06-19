import React, { Component } from "react";
import API from "../utils/API"

class Discover extends Component {

  state = {
    image: "",
    match: false,
    matchCount: 0
  }

  componentDidMount() {
    this.loadDog();
  }

  //get random dog image
  loadDog = () => {
    API.getRandomDog()
      .then(res => this.setState({ image: res.data.message }))
      .catch(err => console.log(err));
  }

  handleVote = voteStatus => {
    if (voteStatus === "upvote") {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      if (randomNumber === 5) {
        this.setState({
          match: true,
          matchCount: this.state.matchCount + 1
        });
      }
    }
    this.loadDog();
  }


  render() {
    return (
      <div className="container my-5">
        <div className="jumbotron bg-info">
          <h1 className="display-4">Find a match with a doggo!</h1>
          {(this.state.match) ? (
            <div className="alert alert-success" role="alert">
              You have matched with { this.state.matchCount} doggos!
            </div>
          ) : ("")}
          <hr className="my-4" />
          <img src={this.state.image || "http://viaplaceholder.com/350x350"} alt="Random Doggo" />
          <button className="btn btn-success" onClick={() => this.handleVote("upvote")}>
            Upvote
        </button>
          <button className="btn btn-danger" onClick={() => this.handleVote("downvote")}>
            Downvote
        </button>

        </div>
      </div>
    )
  }
}
export default Discover;
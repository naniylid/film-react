import React from "react";
import { Movies } from "../components/Movies";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e6135465&s=matrix?")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    );
  }
}

export { Main };

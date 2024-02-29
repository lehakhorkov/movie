import React from "react";
import { MoviesList } from "../components/MoviesList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  // Каждый компонент React проходит несколько стадий в процессе своей жизни: он создается, затем добавляется в DOM, получает пропсы, и, наконец, удаляется из дерева. Этот процесс называют жизненным циклом компонента (Component Lifecycle). React предоставляет набор методов, которые позволяют встроиться в этот процесс.

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`).then(
      (response) =>
        response
          .json()
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          )
          .catch((err) => {
            console.log(err);
            this.setState({ loading: false });
          })
    );
  }

  //обновление фильмов в поиске
  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <MoviesList movies={movies} />}
      </main>
    );
  }
}
export { Main };

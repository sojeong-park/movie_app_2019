import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state={
    isLoading : true,
    movies: []
  }

  getMovies = async () =>{
    //es6
    const {
      data:
      {data:
        {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies); // old js
    this.setState({ movies, isLoading: false}); // {movies: movies} front- from state back - from axios
  }

  async componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
           <div className = "loader">
           <span className = "loader__text">Loading...</span>
         </div>
        ) : (
          <div className = "movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.description_full}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

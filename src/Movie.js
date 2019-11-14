import React from "react";
import propTypes from "prop-types";
import { prototype } from "events";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className = "movie_data">
                <h2 className = "movie_title">{title}</h2>
                <h5 className = "movie_year">{year}</h5>
                <ul>
                    {genres.map(genre => (
                     <li className="movie_genre">{genre}</li>   
                    ))}
                </ul>
                <p className = "movie_summery">{summary.slice(0,140)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title :  propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired 
}

export default Movie;
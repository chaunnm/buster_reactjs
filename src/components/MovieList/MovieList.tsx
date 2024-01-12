import React from 'react';
import MovieListItem from '.';
import { MovieListProps } from '../../interfaces';
const MovieList: React.FC<MovieListProps> = ({ movieLists, title }) => {
  if (!movieLists) return null;
  return (
    <div className="list">
      <span className="list-title">{title}</span>
      <div className="slick-slider">
        <div className="slick-list">
          <div className="slide-item">
            {movieLists.map((movieList) => (
              <MovieListItem
                id={movieList.id}
                poster={movieList.poster}
                movieName={movieList.movieName}
                releaseYear={movieList.releaseYear}
                rating={movieList.rating}
                hrefPath={movieList.hrefPath}
              ></MovieListItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieList;

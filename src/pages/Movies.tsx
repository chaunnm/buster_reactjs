import { MovieListItem } from '../components';
import { MovieListItemProps } from '../interfaces';
// interface MovieListItems {
//   id: number;
//   poster: string;
//   movieName: string;
//   releaseYear: number;
//   rating: number;
//   hrefPath: string;
// }

function Movies() {
  const a: MovieListItemProps = {
    id: 848723,
    poster: 'https://image.tmdb.org/t/p/w300/tRD18JW9iKqmwkQKvzPYDQetRoI.jpg',
    movieName: 'Evie',
    releaseYear: 1990,
    rating: 8.8,
    hrefPath: 'https://www.2embed.cc/embed/tt13540744',
  };

  return (
    <div>
      <div>This is Movies Page</div>
      <MovieListItem
        id={a.id}
        poster={a.poster}
        movieName={a.movieName}
        releaseYear={a.releaseYear}
        rating={a.rating}
        hrefPath={a.hrefPath}
      ></MovieListItem>
    </div>
  );
}

export default Movies;

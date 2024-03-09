import { category, movieType } from '../api/tmdbApi';
import { MovieList } from '../components';
import BigMovieList from '../components/MovieList/BigMovieList';

function Movies() {
  return (
    <div>
      <BigMovieList
        category={category.movie}
        type={movieType.trending}
        title=''
        fire={false}
      ></BigMovieList>
      <MovieList
        category={category.movie}
        type={movieType.upcoming}
        title='Upcoming Movies'
        fire={false}
      ></MovieList>
      <MovieList
        category={category.movie}
        type={movieType.top_rated}
        title='Top Rated Movies'
        fire={false}
      ></MovieList>
      <MovieList
        category={category.movie}
        type={movieType.popular}
        title='Popular Movies'
        fire={false}
      ></MovieList>

      <MovieList
        category={category.movie}
        type={movieType.trending}
        title='Trending Movies'
        fire={false}
      ></MovieList>
    </div>
  );
}

export default Movies;

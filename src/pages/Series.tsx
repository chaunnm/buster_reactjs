import { category, tvType } from '../api/tmdbApi';
import { MovieList } from '../components';
import BigMovieList from '../components/MovieList/BigMovieList';

function Series() {
  return (
    <div>
      <h1 className='Series tittle text-center text-4xl py-5 font-bold'>Series TV</h1>
      <BigMovieList
        category={category.tv}
        type={tvType.top_rated}
        title=''
        fire={false}
      ></BigMovieList>

      <MovieList
        category={category.tv}
        type={tvType.airing_today}
        title='Airing today TV'
        fire={false}
      ></MovieList>
      <MovieList
        category={category.tv}
        type={tvType.on_the_air}
        title='Airing in the next 7 days'
        fire={false}
      ></MovieList>
      <MovieList
        category={category.tv}
        type={tvType.top_rated}
        title='Top Rated TV'
        fire={false}
      ></MovieList>

      <MovieList
        category={category.tv}
        type={tvType.popular}
        title='Popular TV'
        fire={false}
      ></MovieList>
    </div>
  );
}

export default Series;

import { category, movieType, tvType } from '../api/tmdbApi';
import { MovieList } from '../components';
import Banner from '../components/Banner/Banner';

function Home() {
  return (
    <div className='Page'>
      <Banner />

      <MovieList
        category={category.tv}
        type={tvType.trending}
        title='Trending TV'
        fire={false}
      />
      <MovieList
        category={category.movie}
        type={movieType.trending}
        title='Trending Movies'
        fire={false}
      />
      <MovieList
        category={category.movie}
        type={movieType.top_rated}
        title='Top Rated Movie'
        fire={false}
      />
      <MovieList
        category={category.tv}
        type={tvType.top_rated}
        title='Top Rated TV'
        fire={false}
      />

      <MovieList
        category={category.movie}
        type={movieType.popular}
        title='Popular Movies'
        fire={false}
      />
    </div>
  );
}

export default Home;

import { category, movieType, tvType } from "../api/tmdbApi";
import { TestMovieList } from "../components";


function Home() {  

  return (
    <div className='text-3xl'>
      This is HomePage
      <TestMovieList
        category={category.tv}
        type={tvType.trending}
        title='Trending TV'
        fire={false}
      />
      <TestMovieList
        category={category.movie}
        type={movieType.trending}
        title='Trending Movies'
        fire={false}
      />
    </div>
  );
}

export default Home

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieListService from '../services/movieList';
import { MovieListItem } from '../components';
import Slider from 'react-slick';

function Genre() {
  const [TVList, setTVList] = useState<[]>([]);
  const [movieList, setMovieList] = useState<[]>([]);
  const { name } = useParams();
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  useEffect(() => {
    const fetchGernes = async () => {
      try {
        //Get IDGenre
        const movieGenres = await movieListService.getGenres('movie');
        const tvGenres = await movieListService.getGenres('tv');
        const genresList = [...movieGenres.data.genres, ...tvGenres.data.genres] as [];
        const genreID = genresList.find((genreItem) => genreItem.name === name)?.id;

        //Handle ID to ListGenre
        const movieGenreList = await movieListService.getMovieByGenre('movie', genreID);
        const TVGenreList = await movieListService.getMovieByGenre('tv', genreID);
        setMovieList(movieGenreList.data.results);
        setTVList(TVGenreList.data.results);
      } catch (error: any) {
        console.error('Error fetching movies:', error.message);
      }
    };
    fetchGernes();
  }, [name]);
  return (
    <div className='movie-by-genre'>
      <div className='page-tittlen uppercase text-center my-9'>{name}</div>
      <Slider
        {...settings}
        className='w-[90%]'
      >
        {movieList &&
          movieList.map((item, i) => (
            <MovieListItem
              key={i}
              item={item}
              category={'movie'}
            />
          ))}

        {TVList &&
          TVList.map((item, i) => (
            <MovieListItem
              key={i}
              item={item}
              category={'tv'}
            />
          ))}
      </Slider>
    </div>
  );
}

export default Genre;

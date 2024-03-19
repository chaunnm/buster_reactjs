/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieListService from '../services/movieList';
import { MovieListItem } from '../components';
import Slider from 'react-slick';
import { Genre } from '../interfaces';

function Genres() {
  const [TVList, setTVList] = useState<[]>([]);
  const [movieList, setMovieList] = useState<[]>([]);
  const { name } = useParams();
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '2rem',
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 4,
  };

  useEffect(() => {
    const fetchGernes = async () => {
      try {
        //Get IDGenre
        const movieGenres = await movieListService.getGenres('movie');
        const tvGenres = await movieListService.getGenres('tv');
        const genresList: Genre[] = [...movieGenres.data.genres, ...tvGenres.data.genres] as [];
        const genreID = genresList.find((genreItem: Genre) => genreItem.name === name)?.id;

        //Handle ID to ListGenre
        if (typeof genreID !== 'undefined') {
          const movieGenreList = await movieListService.getMovieByGenre(
            'movie',
            genreID.toString(),
          );
          const TVGenreList = await movieListService.getMovieByGenre('tv', genreID.toString());
          setMovieList(movieGenreList.data.results);
          setTVList(TVGenreList.data.results);
        }
      } catch (error: any) {
        console.error('Error fetching movies:', error.message);
      }
    };
    fetchGernes();
  }, [name]);
  return (
    <div className='movie-by-genre px-10'>
      <div className='page-tittlen uppercase text-center my-9 font-bold text-2xl md:text-3xl'>
        {name} Movies & TV Series
      </div>
      <Slider
        {...settings}
        className='w-[90%] ml-12'
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

export default Genres;

import React, { useEffect, useState } from 'react';
import { apiConfig } from '../../api';
import movieListService from '../../services/movieList';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa6';
import './dots.scss';

interface BannerItemProp {
  item: {
    backdrop_path: string;
    poster_path: string;
    id: number;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    overview: string;
    media_type: string;
    genre_ids: string[];
  };
}

export const BannerItem: React.FC<BannerItemProp> = ({ item }) => {
  const [genres, setGenres] = useState<[]>([]);

  useEffect(() => {
    const fetchGernes = async () => {
      try {
        const movieGenres = await movieListService.getGenres('movie');
        const tvGenres = await movieListService.getGenres('tv');
        const genresList = [...movieGenres.data.genres, ...tvGenres.data.genres] as [];
        setGenres(genresList);
      } catch (error: any) {
        console.error('Error fetching movies:', error.message);
      }
    };
    fetchGernes();
  }, [item]);

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );
  const path = `/view/${item.media_type}/${item.id}`;

  return (
    <div className='banner-wapper h-80 md:h-96 w-full relative'>
      <img
        src={background}
        className='object-fill absolute z-10'
      />
      <div className='banner-flitter absolute bg-black bg-opacity-40 w-[100%] h-[100%] z-20'>
        <div
          className='banner-content xl:w-2/5 w-100% md:ml-16 mt-8 text-justify items-center 
        md:items-start flex flex-col justify-between gap-y-3.5'
        >
          <h2
            className='banner-tittle p-1 uppercase text-xl text-center 
          font-semibold border-2 border-solid border-[--main-color] mb-2'
          >
            POPULAR MOVIES & SERIES
          </h2>
          <h3 className='banner-itemName text-[3rem] font-extrabold'>
            {item.title ? item.title : item.name}
          </h3>
          <p className='text-sm'>
            <span className='banner-year'>
              {' '}
              {item.first_air_date
                ? item.first_air_date.slice(0, 4)
                : item.release_date?.slice(0, 4)}
              {' | '}
            </span>
            <span>{item.media_type === 'tv' ? 'Series' : 'Movie'} |</span>
            <span>
              {/* Handle GenresList */}{' '}
              {item.genre_ids
                .map((id) => {
                  const genre = genres.find((gerne) => gerne.id === id);
                  return genre ? genre.name : id;
                })
                .toString()
                .replace(/,/g, ', ')}
            </span>
          </p>
          <p className='text-sm tracking-wide hidden lg:block'>
            {' '}
            {item.overview.length < 200 ? item.overview : item.overview.split('.')[0] + '...'}
          </p>
          <div className='banner-button'>
            <Link to={path}>
              <button
                className='uppercase text-[#000] 
              texl-mr-4 px-5 py-1 bg-[--main-color] 
              rounded hover:scale-125 transition-all
               ease-in-out delay-150 mr-6'
              >
                <FaPlay className='inline-block mb-1 mr-1' />
                Watch
              </button>
            </Link>

            <button
              className='addListBtn uppercase px-4 py-1 text-[--main-color] border-solid 
            border-[--main-color]
             rounded border hover:scale-125 transition-all
             ease-in-out delay-150'
            >
              + My Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;

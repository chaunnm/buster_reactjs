/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { movieType, tvType } from '../../api/tmdbApi';
import MovieListItem from './MovieListItem';
import { BsFire } from 'react-icons/bs';
import movieListService from '../../services/movieList';
import { MovieListProps } from '../../interfaces';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '../../utils';

const MovieList: React.FC<MovieListProps> = (props) => {
  const [list, setList] = useState<[]>([]);
  const settingsSlider = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieList = null;
        const page = '1';
        switch (props.type) {
          case tvType.trending:
          case movieType.trending:
            movieList = await movieListService.getTrendingList(props.category, page);
            break;
          case 'similar':
            if (props.id !== undefined) {
              movieList = await movieListService.getSimilar(props.category, props.id);
            }
            break;
          default:
            movieList = await movieListService.getListByType(props.category, props.type);
            break;
        }
        setList(movieList?.data.results);
      } catch (error: any) {
        console.error('Error fetching movies:', error.message);
      }
    };
    fetchData();
  }, [props.id, props.category, props.type]);

  return (
    <div className='list p-5 ml-8'>
      <span className='list-title text-lg flex'>
        {props.title}
        {props.fire && <BsFire className='mt-1 ml-2 text-red-500 text-xl' />}
      </span>
      <div className='wrapper h-[100%] relative mt-6'>
        <Slider {...settingsSlider}>
          {list &&
            list.map((item, i) => (
              <MovieListItem
                key={i}
                item={item}
                category={props.category}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
// const fetchData = async () => {
//   let response = null;
//   let params: Partial<Record<string, string>> = {};

//   if (props.type !== 'similar') {
//     switch (props.category) {
//       case category.movie:
//         if (props.type) {
//           if (props.type === movieType.trending) {
//             response = await tmdbApi.getTrendingList(category.movie, { params });
//           } else {
//             response = await tmdbApi.getMovieList(props.type, { params });
//           }
//         } else {
//           params = {
//             with_genres: props.genre_id,
//           };
//           response = await tmdbApi.discover(props.category, { params });
//         }
//         break;
//       default:
//         if (props.type === tvType.trending) {
//           response = await tmdbApi.getTrendingList(props.category, { params });
//         } else {
//           response = await tmdbApi.getTVList(props.type, { params });
//         }
//         break;
//     }
//   } else {
//     if (props.id !== undefined) {
//       response = await tmdbApi.getSimilar(props.category, props.id);
//     }
//   }
//   setList(response?.data.results);
// };

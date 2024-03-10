import React, { useEffect, useState } from 'react';
import { movieType, tvType } from '../../api/tmdbApi';
import MovieListItem from './MovieListItem';
import { BsFire } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import movieListService from '../../services/movieList';
import { MovieListProps } from '../../interfaces';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieList: React.FC<MovieListProps> = (props) => {
  interface arrowProps {
    onClick?: () => void;
  }

  const LeftArrow: React.FC<arrowProps> = (props) => (
    <div
      onClick={props.onClick}
      className='icon leftArrow absolute -top-7 right-10 cursor-pointer rounded-xl bg-slate-400 opacity-70'
    >
      <GrFormPrevious />
    </div>
  );

  const RightArrow: React.FC<arrowProps> = (props) => (
    <div
      onClick={props.onClick}
      className='icon rightArrow absolute -top-7 right-5 cursor-pointer rounded-xl bg-slate-400 opacity-70'
    >
      <MdNavigateNext />
    </div>
  );

  const [list, setList] = useState<[]>([]);
  const settingsSlider = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
    <div className='list p-5 '>
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

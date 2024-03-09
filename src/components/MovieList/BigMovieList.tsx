import React, { useEffect, useState } from 'react';
import { movieType, tvType } from '../../api/tmdbApi';
import MovieListItem from './MovieListItem';
import { BsFire } from 'react-icons/bs';
import movieListService from '../../services/movieList';
import { MovieListProps } from '../../interfaces';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigMovieList: React.FC<MovieListProps> = (props) => {
  const [list, setList] = useState<[]>([]);
  const settingsSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
        const page = '3';
        switch (props.type) {
          case tvType.trending:
          case movieType.trending:
            movieList = await movieListService.getTrendingList(props.category, page);
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
    <div className='list p-5'>
      <span className='list-title text-lg'>
        {props.title}
        {props.fire && <BsFire />}
      </span>
      <div className='wrapper h-[100%] relative mt-6 ml-8'>
        <Slider {...settingsSlider}>
          {list &&
            list.map((item, i) => (
              <MovieListItem
                key={i}
                item={item}
                category={props.category}
                largerVersion={true}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default BigMovieList;
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

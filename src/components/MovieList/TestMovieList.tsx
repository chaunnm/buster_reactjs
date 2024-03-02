import React, { useEffect, useState } from 'react';
import { movieType, tvType } from '../../api/tmdbApi';
import TestMovieListItem from './TestMovieListItem';
import { BsFire } from 'react-icons/bs';
import movieListService from '../../services/movieList';
import { MovieListProps } from '../../interfaces';

const TestMovieList: React.FC<MovieListProps> = (props) => {
  const [list, setList] = useState<[]>([]);

  useEffect(() => {
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
    const fetchData = async () => {
      try {
        let movieList = null;
        switch (props.type) {
          case tvType.trending:
          case movieType.trending:
            movieList = await movieListService.getTrendingList(props.category);
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
    <div className='list'>
      <span className='list-title'>
        {props.title}
        {props.fire && <BsFire />}
      </span>
      <div className='wrapper'>
        {list &&
          list.map((item, i) => (
            <TestMovieListItem
              key={i}
              item={item}
              category={props.category}
            />
          ))}
      </div>
    </div>
  );
};

export default TestMovieList;

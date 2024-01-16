import React, { useEffect, useState } from 'react';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import TestMovieListItem from './TestMovieListItem';
import { BsFire } from 'react-icons/bs';

interface MovieListProps {
  type: string;
  category: string;
  genre_id?: number;
  id?: number;
  title: string;
  fire: boolean;
}

const TestMovieList: React.FC<MovieListProps> = (props) => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = null;
      let params: Record<string, any> = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            if (props.type) {
              if (props.type === movieType.trending) {
                response = await tmdbApi.getTrendingList(category.movie, { params });
              } else {
                response = await tmdbApi.getMovieList(props.type, { params });
              }
            } else {
              params = {
                with_genres: props.genre_id,
              };
              response = await tmdbApi.discover(props.category, { params });
            }
            break;
          default:
            if (props.type === tvType.trending) {
              response = await tmdbApi.getTrendingList(props.category, { params });
            } else {
              response = await tmdbApi.getTVList(props.type, { params });
            } 
            break;
        }
      } else {
        if (props.id !== undefined) {
          response = await tmdbApi.getSimilar(props.category, props.id);
        }
      }
      setList(response?.data.results);
    };
    fetchData();
  }, [props.id, props.category, props.type, props.genre_id]);

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

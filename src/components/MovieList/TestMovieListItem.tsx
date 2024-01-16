import { Link } from 'react-router-dom';
import { apiConfig } from '../../api';
import { IoStar } from 'react-icons/io5';

interface MovieListItemProps {
  item: {
    backdrop_path: string;
    poster_path: string;
    id: number;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
  };
  category: string;
}

const TestMovieListItem: React.FC<MovieListItemProps> = ({ item, category }) => {
  const background = apiConfig.w200Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  const path = category === 'tv' ? `/view/tv/${item.id}` : `/view/movie/${item.id}`;

  return (
    (item.backdrop_path || item.poster_path) && (
      <div className='movie-list-item'>
        <div className='wrap-img'>
          <Link to={path}>
            <img
              src={background}
              alt='movie-img'
            />
            <div
              className='play-btn-outer'
              onClick={() => window.scroll(0, 0)}
            >
              <div className='play-btn'></div>
            </div>
          </Link>
        </div>
        <div className='item-title'>{item.title || item.name}</div>
        <div className='details'>
          <div className='year'>
            {item.release_date
              ? item.release_date.slice(0, 4)
              : item.first_air_date
              ? item.first_air_date.slice(0, 4)
              : ''}{' '}
            - {Math.round(item.vote_average * 100) / 100} <IoStar />
          </div>
        </div>
      </div>
    )
  );
};

export default TestMovieListItem;

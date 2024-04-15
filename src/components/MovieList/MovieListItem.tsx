import { Link } from 'react-router-dom';
import { apiConfig } from '../../api';
import { FaStar } from 'react-icons/fa';

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
  largerVersion?: boolean;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ item, category, largerVersion }) => {
  const background = apiConfig.w400Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  const path = category === 'tv' ? `/view/tv/${item.id}` : `/view/movie/${item.id}`;

  return (
    (item.backdrop_path || item.poster_path) && (
      <div className={`movie-list-item w-64 ${largerVersion ? 'w-96 h-56' : ''}`}>
        <div
          className='wrap-img
        relative group overflow-hidden 
        rounded-t-sm'
        >
          <img
            src={background}
            alt='movie-img'
            className={`group-hover:scale-105 transition-all duration-500 ease-in-out relative w-64  ${
              largerVersion ? 'w-96 h-56' : ''
            }`}
          />
          <Link to={path}>
            <div
              className='play-btn-outer hidden absolute rounded-full w-14 h-14 top-1/2 left-1/2 border-2 
              border-[--main-color] bg-gray-400 bg-opacity-50 -translate-x-1/2 -translate-y-1/2
               transition-all duration-500 ease-in-out
               hover:bg-gray-400 hover:bg-opacity-80 hover:w-16 hover:h-16
               group-hover:block'
              onClick={() => window.scroll(0, 0)}
            >
              <div
                className='hidden play-btn absolute top-1/2 left-1/2
               transform -translate-x-1/2 -translate-y-1/2 w-0 h-0  
               border-t-[10px] border-t-transparent border-b-[10px] 
               border-b-transparent border-l-[20px] border-l-solid
               border-l-[--main-color]
               z-40 group-hover:block'
              ></div>
            </div>
          </Link>
        </div>
        <div className={`item-desc ${largerVersion ? 'absolute bottom-5 ml-5 ' : ''}`}>
          <div className={`item-title text-base mt-1 ${largerVersion ? 'text-3xl text-white' : ''} `}>
            {item.title || item.name}
          </div>
          <div className='details flex items-center text-base mt-1 text-[#707070]'>
            <div className='year flex items-center'>
              {item.release_date
                ? item.release_date.slice(0, 4)
                : item.first_air_date
                ? item.first_air_date.slice(0, 4)
                : ''}{' '}
              - {Math.round(item.vote_average * 100) / 100}{' '}
              <FaStar className='text-[#d8a865] inline-block ml-1' />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieListItem;

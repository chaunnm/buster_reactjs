import { FaStar } from 'react-icons/fa';
import { apiConfig } from '../../api';
import { Link } from 'react-router-dom';

interface ResultCardItem {
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
}

interface ResultCardsProps {
  item: ResultCardItem;
}

export type { ResultCardItem, ResultCardsProps };

function ResultCards({ item }: ResultCardsProps) {
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );
  const path = `/view/movie/${item.id}`;

  return (
    (item.backdrop_path || item.poster_path) && (
      <div className='result-container mr-7 mt-5 mb-3 ml-5 w-full flex justify-center max-h-[100px]'>
        <div className='wrap-img flex-1 overflow-hidden relative'>
          <Link to={path}>
            <img
              src={background}
              alt={`${item.title} Poster`}
              className='w-full hover:scale-105 transition-all duration-500 ease-in-out delay-150'
            />
            <div
              className='play-btn-outer'
              onClick={() => window.scroll(0, 0)}
            >
              <div className='play-btn'></div>
            </div>
          </Link>
        </div>
        <div className='container flex-1 items-center mt-3 ml-5'>
          <Link
            to={path}
            className='hover:text-main-color'
          >
            <span className='list-title font-medium'>{item.title}</span>
          </Link>
          <div className='details mt-2 flex'>
            <div className='year text-base text-[#707070] flex flex-row'>
              {item.release_date
                ? item.release_date.slice(0, 4)
                : item.first_air_date
                ? item.first_air_date.slice(0, 4)
                : ''}{' '}
              {item.vote_average && (
                <span className='flex'>
                  &nbsp;- {item.vote_average}&nbsp;
                  <FaStar className='text-[#d8a865] mt-1 text-base' />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ResultCards;

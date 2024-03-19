import { IoRemoveOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { apiConfig } from '../../api';
import { Link, useParams } from 'react-router-dom';
import { OverviewType } from '../../interfaces';

function SeasonItem({ seasons }: OverviewType) {
  const { id } = useParams();
  const path = `/view/tv/${id}/season/${seasons?.season_number}`;
  const posterImg = 'https://i.imgur.com/174s4B5.jpg';

  return (
    <div className='season-item'>
      {seasons && (
        <div className='flex flex-row my-2'>
          <Link
            to={path}
            className='season-img flex-none w-32 mr-2'
          >
            <img
              src={
                seasons.poster_path === null
                  ? posterImg
                  : seasons.poster_path && apiConfig.w200Image(seasons.poster_path)
              }
              alt='Season Image'
            />
          </Link>
          <div className='season-info flex-1 w-64'>
            <Link to={path}>
              <h2 className='text-xl hover:text-main-color'>{seasons.name}</h2>
            </Link>
            <h4 className='flex items-center content-center'>
              {seasons.vote_average === 0 ? (
                <IoRemoveOutline />
              ) : (
                <div className='rating flex flex-row'>
                  <FaStar className='text-[#d8a865]' />
                  {seasons.vote_average && Math.round(seasons.vote_average * 10) / 10}
                </div>
              )}
              &nbsp;
              {seasons.air_date === null
                ? ''
                : seasons.air_date && `• ${seasons.air_date.slice(0, 4)}`}
              &nbsp;•&nbsp;
              {seasons.episode_count} Episodes
            </h4>
            <p className='overview'>
              {seasons.overview === ''
                ? "We don't have an overview translated in English. Help us expand our database by adding one."
                : seasons.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeasonItem;

import { Link, useParams } from 'react-router-dom';
import { apiConfig } from '../../api';
import { IoRemoveOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { Season } from '../../interfaces';

function EpisodeItem({ episodes }: Season) {
  const { id, season } = useParams();
  const path = `/view/tv/${id}/season/${season}/episode/${episodes?.episode_number}`;
  const episodeDate = `• ${episodes.air_date?.split('-').reverse().join('/')}`;

  return (
    <div className='episode-item flex flex-col mr-2 min-w-52 w-52 pl-2'>
      <Link
        to={path}
        className='episode-img basis-full'
      >
        <img
          src={
            episodes.still_path === null
              ? 'https://i.imgur.com/S9JeE0Q.png'
              : episodes.still_path && apiConfig.w200Image(episodes.still_path)
          }
          alt='Episode Image'
          className='h-24 w-full'
        />
        <h4 className='episode-title line-clamp-2 text-lg hover:text-main-color'>
          {`Episode ${episodes.episode_number}` === episodes.name
            ? episodes.name
            : `Episode ${episodes.episode_number}. ${episodes.name}`}
        </h4>
      </Link>
      <div className='episode-info basis-full'>
        <span className='flex flex-row items-center'>
          {episodes.vote_average === 0 ? (
            <IoRemoveOutline />
          ) : (
            <div className='rating flex flex-row items-center'>
              <FaStar className='w-3.5 mr-1 text-[#d8a865]' />
              {episodes.vote_average && Math.round(episodes.vote_average * 10) / 10}
            </div>
          )}
          &nbsp;
          {episodes.air_date === null ? '' : episodeDate}
        </span>
        <p className='episode-overview line-clamp-3'>{episodes.overview}</p>
      </div>
    </div>
  );
}

export default EpisodeItem;

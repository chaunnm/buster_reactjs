import { Link, useParams } from 'react-router-dom';
import { Genre, OverviewProps } from '../../interfaces';

const Overview: React.FC<OverviewProps> = ({ title, overview }) => {
  const { category, id, season, episode } = useParams();
  const seasonTitle = season === '0' ? 'Specials' : `Season ${season}`;
  const currentSeason = overview.number_of_seasons;
  const pathCurrentSeason = `/view/tv/${id}/season/${currentSeason}`;

  return (
    <div className='overview '>
      <h1 className='text-2xl md:text-3xl font-medium md:font-bold leading-6'>
        {title}&nbsp;
        {season && <span className='season'>- {seasonTitle}</span>}&nbsp;
        {episode && <span className='episode'>- Episode&nbsp;{episode}</span>}
      </h1>
      {category === 'tv' && (
        <h2 className='season text-lg font-medium'>
          Current Season:&nbsp;
          <Link
            to={pathCurrentSeason}
            className='hover:text-main-color'
          >
            Season {currentSeason}
          </Link>
        </h2>
      )}
      <p className='text-xs mb-1 sm:text-sm '>{overview.tagline}</p>
      <div className='overview-genres'>
        {overview.genres &&
          overview.genres.map((item: Genre) => {
            const path = `/genre/${item.name}`;
            const id = item.id;
            return (
              <Link
                key={id}
                to={{
                  pathname: path,
                }}
                className='hover:text-main-color'
              >
                <span className='px-1 py-1 mr-2 text-xs border-[1px] rounded-lg border-[--main-text-color]'>
                  {item.name}
                </span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Overview;

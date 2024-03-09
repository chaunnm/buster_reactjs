import { Link, useParams } from 'react-router-dom';
import { Genre, OverviewProps } from '../../interfaces';

const Overview: React.FC<OverviewProps> = ({ title, overview, all }) => {
  const { category, season } = useParams();

  return (
    <div className='overview'>
      <h1>{title}</h1>
      {category === 'tv' && season && (
        <h2 className='episode-name'>
          {/* {`Episode ${episodes.episode_number}` === episodes.name
            ? episodes.name
            : `Episode ${episodes.episode_number}. ${episodes.name}`} */}
        </h2>
      )}
      {all && (
        <div>
          Release Date:&nbsp;
          {overview.first_air_date?.split('-').reverse().join('/') ||
            overview.release_date?.split('-').reverse().join('/') ||
            overview.air_date?.split('-').reverse().join('/')}
        </div>
      )}
      {!all && <p>{overview.tagline}</p>}
      {all && <p>{overview.overview}</p>}

      {!all && (
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
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
        </div>
      )}
      {all && (
        <div className='rate'>
          {overview.vote_average && Math.round(overview.vote_average * 100) / 100}
          <span>({overview.vote_count}&nbsp;votes)</span>
        </div>
      )}
    </div>
  );
};

export default Overview;

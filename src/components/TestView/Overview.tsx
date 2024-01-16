import { Link, useParams } from 'react-router-dom';

interface Genre {
  id: number;
  name: string;
}

interface OverviewProps {
  title: string;
  overview: {
    episode_number: number;
    name: string;
    title: string;
    first_air_date: string;
    release_date: string;
    air_date: string;
    tagline: string;
    overview: string;
    genres: Genre[];
    vote_average: number;
    vote_count: number;
  };
  all: boolean;
}

const Overview: React.FC<OverviewProps> = ({ title, overview, all }) => {
  const { category } = useParams();

  return (
    <div className='overview'>
      <h1>{title}</h1>
      {category === 'tv' && (
        <h2 className='episode-name'>
          Episode {overview.episode_number}:&nbsp;{overview.name || overview.title}
        </h2>
      )}
      {all && (
        <div>
          Release Date:&nbsp;
          {overview.first_air_date || overview.release_date || overview.air_date}
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
          {Math.round(overview.vote_average * 100) / 100}
          <span>({overview.vote_count}&nbsp;votes)</span>
        </div>
      )}
    </div>
  );
};

export default Overview;

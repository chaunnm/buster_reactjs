import { Link, useParams } from 'react-router-dom';
import { Genre, OverviewProps } from '../../interfaces';

const Overview: React.FC<OverviewProps> = ({ title, overview }) => {
  const { category } = useParams();

  return (
    <div className='overview '>
      <h1 className='text-2xl md:text-3xl font-medium md:font-bold'>{title}</h1>
      {category === 'tv' && (
        <h2 className='episode-name '>Episode:&nbsp;{overview.name || overview.title}</h2>
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

import { Rating } from '.';
import { DetailsProps } from '../../../interfaces';

const Details: React.FC<DetailsProps> = ({ details }) => {
  //   const name = details.name || details.title;
  const date = details.release_date || details.first_air_date;
  const air_date = date?.split('-').reverse().join('/');

  return (
    <div className='details '>
      {/* <h1 className='text-2xl md:text-3xl font-medium md:font-bold'>{name}</h1> */}
      <h2 className=''>Release Date: {air_date}</h2>
      <p>{details.overview}</p>
      <div className='flex content-center mt-3'>
        <Rating ratingStar={details.vote_average!} />
        &nbsp;({details.vote_count} votes)
      </div>
    </div>
  );
};

export default Details;

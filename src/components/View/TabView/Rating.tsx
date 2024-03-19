import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

interface StarProps {
  starStatus: 'full' | 'half' | 'empty';
}

interface RatingProps {
  ratingStar: number;
}

const Star: React.FC<StarProps> = ({ starStatus }) => {
  return (
    <>
      {starStatus === 'full' && <FaStar />}
      {starStatus === 'half' && <FaStarHalfAlt />}
      {starStatus === 'empty' && <FaRegStar />}
    </>
  );
};

const Rating: React.FC<RatingProps> = ({ ratingStar }) => {
  const fullStar: number = Math.floor(ratingStar);
  // console.log(fullStar);
  return (
    <div className='star-bar flex text-[#d8a865] text-xl'>
      {Array.from({ length: 10 }, (_, i) => {
        let starStatus: 'full' | 'half' | 'empty';

        if (i < fullStar) {
          starStatus = 'full';
        } else if (i === fullStar && i !== 0) {
          starStatus = 'half';
        } else {
          starStatus = 'empty';
        }

        return (
          <Star
            starStatus={starStatus}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Rating;

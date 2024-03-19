import apiConfig from '../../../api/apiConfig';
import { CastItemProps } from '../../../interfaces';

const CastItem: React.FC<CastItemProps> = ({ cast }) => {
  const background = apiConfig.w500Image(cast.profile_path);
  return (
    <div className='cast-container relative h-48 bg-cover bg-center bg-no-repeat mr-5 rounded-xl overflow-hidden'>
      <div className='cast-item absolute top-0 left-0 flex w-ful h-full'>
        <img
          src={background}
          alt=''
          className='w-2/5 h-full object-cover scale-100'
        />
        <div className='cast-info text-[#d1d5db] h-full p-1'>
          <div className='overflow-hidden text-ellipsis line-clamp-5'>
            <h3 className='text-xl leading-7'>{cast.name}</h3>
            <h4 className='text-main-color text-base leading-5'>{cast.character}</h4>
          </div>
        </div>
      </div>
      <div className='mask absolute top-0 left-0 w-full h-full rounded-xl' />
    </div>
  );
};

export default CastItem;

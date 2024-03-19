import { useParams } from 'react-router-dom';
import { apiConfig } from '../../api';
import { useView } from '../../services';
import { Video } from '..';
import { Overview } from '.';
import { IoAdd } from 'react-icons/io5';

function TopView() {
  const { category, id, season, episode } = useParams();
  const { background, src, overview, title } = useView(category, id, season, episode);
  const imgMovie = apiConfig.originalImage(background);

  return (
    <div
      className='view-top flex relative min-h-[500px] max-w-full px-10 py-5 justify-around bg-cover w-full border-b-4 border-main-color'
      style={{
        backgroundImage: `url(${imgMovie})`,
      }}
    >
      <div className='views-top-right relative w-full min-w-96 max-w-full pr-10'>
        {/* {category === 'tv' && !season && (
          <img
            alt={title}
            src={imgMovie}
            className='w-96'
          />
        )} */}
        <Video src={src} />
      </div>
      <div className='view-top-left relative min-w-56'>
        {overview && (
          <Overview
            title={title}
            overview={overview}
          />
        )}

        <button className='add-btn text-sm text-[--main-color] mt-8 flex items-center justify-between border-[1px] border-[--main-color] p-1 md:p-2 rounded-[0.25rem]'>
          <IoAdd />
          <span>MY PLAYLIST</span>
        </button>
      </div>
    </div>
  );
}

export default TopView;

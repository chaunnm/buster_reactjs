import { useParams } from 'react-router-dom';
import { apiConfig } from '../api';
import { IoAdd } from 'react-icons/io5';
import {
  Overview,
  TabDetails,
  TabEpisodes,
  TabSeasons,
  TabSimilar,
  TabViewList,
  Video,
} from '../components/View';
import { useView } from '../services';

function View() {
  const { category, id, season } = useParams();

  const {
    background,
    src,
    seasons,
    episodes,
    overview,
    title,
    details,
    activeTab,
    handleTabClick,
  } = useView(category, id, season);

  const tabProps = { activeTab, handleTabClick };

  return (
    <div>
      <div
        className='view-top flex flex-2-3 justify-around bg-cover'
        style={{
          backgroundImage: `url(${apiConfig.originalImage(background)})`,
        }}
      >
        <div className='view-top-left p-6 md:p-12'>
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
        <div className='views-top-right p-8 h-max'>
          <Video src={src} />
        </div>
      </div>
      <TabViewList
        children={
          <>
            <TabDetails
              details={details}
              {...tabProps}
            />
            <TabEpisodes
              seasons={seasons}
              episodes={episodes}
              {...tabProps}
            />
            <TabSeasons
              seasons={seasons}
              {...tabProps}
            />
            <TabSimilar
              category={category}
              id={id}
              {...tabProps}
            />
          </>
        }
      />
    </div>
  );
}

export default View;

import { useParams } from 'react-router-dom';
import {
  TabDetails,
  TabEpisodes,
  TabSeasons,
  TabSimilar,
  TabViewList,
  TopView,
} from '../components/View';
import { useView } from '../services';

function Episode() {
  const { category, id, season, episode } = useParams();
  const { seasons, episodes, details, activeTab, handleTabClick } = useView(
    category,
    id,
    season,
    episode,
  );

  const tabProps = { activeTab, handleTabClick };

  return (
    <div className='view'>
      <TopView />
      <TabViewList
        children={
          <>
            <TabEpisodes
              seasons={seasons}
              episodes={episodes}
              {...tabProps}
            />
            <TabSeasons
              seasons={seasons}
              {...tabProps}
            />
            <TabDetails
              details={details}
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

export default Episode;

import { TabViewItem } from '.';
import { Episode, Season, TabProps } from '../../../interfaces';
import { EpisodeItem } from '../../TVEpisode';

interface TabEpisodesProps extends TabProps {
  seasons: Season[] | undefined;
  episodes: Episode[] | undefined;
}

const TabEpisodes: React.FC<TabEpisodesProps> = ({
  seasons,
  episodes,
  activeTab,
  handleTabClick,
}) => {
  return (
    <>
      {seasons && episodes && (
        <TabViewItem
          tab='episodes'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={
            <div className='season flex'>
              {episodes &&
                episodes.map((episode, index) => (
                  <EpisodeItem
                    key={index}
                    episodes={episode}
                  />
                ))}
            </div>
          }
        />
      )}
    </>
  );
};

export default TabEpisodes;

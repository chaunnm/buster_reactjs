import { TabViewItem } from '.';
import { Season, TabProps } from '../../../interfaces';
import { SeasonItem } from '../../TVEpisode';

interface TabSeasonsProps extends TabProps {
  seasons: Season[] | undefined;
}

const TabSeasons: React.FC<TabSeasonsProps> = ({ seasons, activeTab, handleTabClick }) => {
  return (
    <>
      {seasons && (
        <TabViewItem
          tab='seasons'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={seasons.map((season, index) => (
            <SeasonItem
              key={index}
              seasons={season}
            />
          ))}
        />
      )}
    </>
  );
};

export default TabSeasons;

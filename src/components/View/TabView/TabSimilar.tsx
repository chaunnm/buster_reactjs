import { TabViewItem } from '.';
import { MovieList } from '../..';
import { TabProps } from '../../../interfaces';

interface TabSimilarProps extends TabProps {
  category: string | undefined;
  id: string | undefined;
}

const TabSimilar: React.FC<TabSimilarProps> = ({ category, id, activeTab, handleTabClick }) => {
  return (
    <>
      {category && id && (
        <TabViewItem
          tab='similar'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={
            <MovieList
              category={category}
              type='similar'
              title=''
              id={parseInt(id, 10)}
              fire={false}
            />
          }
        />
      )}
    </>
  );
};

export default TabSimilar;

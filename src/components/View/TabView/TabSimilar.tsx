import { TabViewItem } from '.';
import { MovieList } from '../..';
import { movieType, tvType } from '../../../api/tmdbApi';
import { TabProps } from '../../../interfaces';

interface TabSimilarProps extends TabProps {
  category: string | undefined;
  id: string | undefined;
}

const TabSimilar: React.FC<TabSimilarProps> = ({ category, id, activeTab, handleTabClick }) => {
  const typeTrending = tvType.trending || movieType.trending;
  const title = `TRENDING ${category?.toUpperCase()}`;

  return (
    <>
      {category && id && (
        <TabViewItem
          tab='similar'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={
            <>
              <MovieList
                category={category}
                type='similar'
                title=''
                id={parseInt(id, 10)}
                fire={false}
              />
              <MovieList
                category={category!}
                type={typeTrending}
                title={title}
                fire={true}
              />
            </>
          }
        />
      )}
    </>
  );
};

export default TabSimilar;

import { useParams } from 'react-router-dom';
import { TabDetails, TabSeasons, TabSimilar, TabViewList, TopView } from '../components/View';
import { useView } from '../services';

function View() {
  const { category, id, season } = useParams();
  const { seasons, details, activeTab, handleTabClick } = useView(category, id, season);

  const tabProps = { activeTab, handleTabClick };

  return (
    <div className='view'>
      <TopView />
      <TabViewList
        children={
          <>
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

export default View;

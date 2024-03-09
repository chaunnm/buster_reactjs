import { TabViewItem } from '.';
import { Overview } from '..';
import { OverviewType, TabProps } from '../../../interfaces';

interface TabDetailsProps extends TabProps {
  details: OverviewType;
}

const TabDetails: React.FC<TabDetailsProps> = ({ details, activeTab, handleTabClick }) => {
  return (
    <>
      {details && (
        <TabViewItem
          tab='details'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={
            <>
              <Overview
                title=''
                overview={details}
              />
              {/* <Cast /> // create Cast Component */}
            </>
          }
        />
      )}
    </>
  );
};

export default TabDetails;

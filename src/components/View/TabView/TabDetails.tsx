import { Cast, Details, TabViewItem } from '.';
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
              <Details details={details} />
              <Cast />
            </>
          }
        />
      )}
    </>
  );
};

export default TabDetails;

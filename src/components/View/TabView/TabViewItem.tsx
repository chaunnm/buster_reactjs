import { ReactNode } from 'react';
import { Tab } from '../../../interfaces';

interface ContentTabViewProps {
  tab: Tab;
  children?: ReactNode;
  activeTab: string;
}

interface TabViewProps extends ContentTabViewProps {
  handleTabClick: (tab: Tab) => void;
}

export type { Tab, ContentTabViewProps, TabViewProps };

const moreTitleStyle = 'text-2xl mr-4';
const activeMoreTitleStyle = 'border-b-4 border-main-color';
const activeMoreContentStyle = 'block';

const TitleTabView: React.FC<TabViewProps> = ({ tab, activeTab, handleTabClick }) => {
  return (
    <h4
      className={`${moreTitleStyle} ${activeTab === tab && activeMoreTitleStyle}`}
      onClick={() => handleTabClick(tab)}
    >
      {tab.toUpperCase()}
    </h4>
  );
};

const ContentTabView: React.FC<ContentTabViewProps> = ({ tab, activeTab, children }) => {
  return <>{activeTab === tab && <div className={`${activeMoreContentStyle}`}>{children}</div>}</>;
};

const TabViewItem: React.FC<TabViewProps> = ({ tab, activeTab, handleTabClick, children }) => {
  return (
    <div className='bg-[#121212]'>
      <ul className='bot-more-title'>
        <TitleTabView
          tab={tab}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </ul>
      <div className='bot-more-content bg-[#121212] absolute left-0 w-full my-2 px-4'>
        {
          <ContentTabView
            tab={tab}
            activeTab={activeTab}
            children={children}
          />
        }
      </div>
    </div>
  );
};

export { TitleTabView, ContentTabView, TabViewItem };

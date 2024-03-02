import { ReactNode } from 'react';

type Tab = 'episodes' | 'seasons' | 'similar' | 'details';

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

const TabView: React.FC<TabViewProps> = ({ tab, activeTab, handleTabClick, children }) => {
  return (
    <div>
      <ul className='bot-more-title'>
        <TitleTabView
          tab={tab}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </ul>
      <div className='bot-more-content absolute left-0 w-full'>
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

export { TitleTabView, ContentTabView, TabView };

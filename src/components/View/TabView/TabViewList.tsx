import { ReactNode } from 'react';

interface TabViewListProps {
  children: ReactNode;
}

const TabViewList: React.FC<TabViewListProps> = ({ children }) => {
  return (
    <div
      className='views-bot pt-5 pl-4 flex flex-row'
      onClick={() => window.scroll(0, 0)}
    >
      {children}
    </div>
  );
};

export default TabViewList;

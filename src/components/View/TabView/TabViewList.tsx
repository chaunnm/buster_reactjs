import { ReactNode } from 'react';

interface TabViewListProps {
  children: ReactNode;
}

const TabViewList: React.FC<TabViewListProps> = ({ children }) => {
  return <div className='views-bot pt-6 pl-4 flex flex-row bg-[#121212]'>{children}</div>;
};

export default TabViewList;

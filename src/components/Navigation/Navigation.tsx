import { NavLink } from 'react-router-dom';
import navItem from './NavItem';

function Navigation() {
  const navItemStyle =
    'h-[calc(100%/8-1px)] cursor-pointer border border-slate-700 flex flex-col items-center justify-center';
  const activeNav = 'text-main-color bg-[#1e4a47] font-semibold';

  return (
    <div className='nav z-40 fixed top-0 left-0 w-24 h-full bg-black'>
      <div className={`logo-container + ${navItemStyle}`}>
        <div className='logo text-main-color font-medium text-4xl font-["Bebas"]'>BUSTER</div>
      </div>
      {navItem.map((item, index) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
            }
          >
            <Icon className='nav-icon mb-1.5 text-2xl' />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navigation;

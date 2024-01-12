import { NavLink } from 'react-router-dom';
import { MdDownload, MdHome, MdLocalMovies, MdMovie } from 'react-icons/md';
import { CgPlayList } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { IoNewspaper } from 'react-icons/io5';

function Navigation() {
  const navItemStyle =
    'h-[calc(100%/8-1px)] cursor-pointer border border-slate-700 flex flex-col items-center justify-center';
  const activeNav = 'text-main-color bg-[#1e4a47] font-semibold';

  return (
    <div className='nav z-40 fixed top-0 left-0 w-24 h-full bg-black'>
      <div className={`logo-container + ${navItemStyle}`}>
        <div className='logo text-main-color font-medium text-4xl font-["Bebas"]'>BUSTER</div>
      </div>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <MdHome className='nav-icon mb-1.5 text-2xl' />
        Home
      </NavLink>
      <NavLink
        to='/series'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <MdLocalMovies className='nav-icon mb-1.5 text-2xl' />
        Series
      </NavLink>
      <NavLink
        to='/movies'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <MdMovie className='nav-icon mb-1.5 text-2xl' />
        Movies
      </NavLink>
      <NavLink
        to='/my_list'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <CgPlayList className='nav-icon mb-1.5 text-2xl' />
        My List
      </NavLink>
      <NavLink
        to='/downloads'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <MdDownload className='nav-icon mb-1.5 text-2xl' />
        Downloads
      </NavLink>
      <NavLink
        to='/news'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <IoNewspaper className='nav-icon mb-1.5 text-2xl' />
        News
      </NavLink>
      <NavLink
        to='/settings'
        className={({ isActive }) =>
          isActive ? `${activeNav} ${navItemStyle}` : `${navItemStyle}`
        }
      >
        <IoMdSettings className='nav-icon mb-1.5 text-2xl' />
        Settings
      </NavLink>
    </div>
  );
}

export default Navigation;

import { CgPlayList } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { IoNewspaper } from 'react-icons/io5';
import { MdDownload, MdHome, MdLocalMovies, MdMovie } from 'react-icons/md';

const navItem = [
  { name: 'Home', path: '/', icon: MdHome },
  { name: 'Series', path: '/series', icon: MdLocalMovies },
  { name: 'Movies', path: '/movies', icon: MdMovie },
  { name: 'My List', path: '/my_list', icon: CgPlayList },
  { name: 'Downloads', path: '/downloads', icon: MdDownload },
  { name: 'News', path: '/news', icon: IoNewspaper },
  { name: 'Settings', path: '/settings', icon: IoMdSettings },
];

export default navItem;

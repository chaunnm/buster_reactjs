import { IoNotifications, IoSearchSharp } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Profile from './Profile';

function Topbar() {
  const filterStyle =
    'flex items-center justify-between cursor-pointer border-2 border-main-color rounded py-2 pr-1.5 pl-3 my-0 mx-5';

  return (
    <div className='top-bar z-30 bg-[#161616] fixed top-0 right-0 w-full h-24 flex justify-between items-center'>
      <div className='flex ml-2.5 font-medium'>
        <h1 className='logo text-main-color text-4xl font-["Bebas"]'>BUSTER</h1>
        <div className='relative'>
          <div className={`${filterStyle} + w-44`}>
            <span className='mr-7'>All Genres</span>
            <RiArrowDropDownLine className='text-3xl' />
          </div>
        </div>
        <div className='relative'>
          <div className={`${filterStyle} + w-36`}>
            <span className='mr-7'>All Time</span>
            <RiArrowDropDownLine className='text-3xl' />
          </div>
        </div>
      </div>
      <div>
        <form className='flex h-11 rounded overflow-hidden'>
          <input
            type='text'
            placeholder='Search Movies, TV series,...'
            className='w-96 bg-[#303030] border-0 p-4 text-[#9fb3c8] font-medium outline-none'
          />
          <div className='h-full w-11 flex justify-center items-center bg-main-color leading-3'>
            <IoSearchSharp className='text-2xl' />
          </div>
        </form>
      </div>
      <div className='flex items-center ml-5'>
        <IoNotifications className='text-2xl' />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;

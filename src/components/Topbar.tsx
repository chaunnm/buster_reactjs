import { useState, useEffect, useRef } from 'react';
import { IoNotifications, IoSearchSharp } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Topbar() {
  const profile_pic1 = 'https://imgur.com/rMxA1X4.jpg';
  const profile_pic2 = 'https://imgur.com/vSMKJyr.jpg';
  const profile_pic3 = 'https://imgur.com/Vtxzzl8.png';
  const profile_pic4 = 'https://i.imgur.com/q9EXLkU.jpg';

  const filterStyle =
    'flex items-center justify-between cursor-pointer border-2 border-main-color rounded py-2 pr-1.5 pl-3 my-0 mx-5';
  const imgProfileStyle = 'w-11 h-11 my-0 mx-5 rounded-full object-cover';
  const linkMenuStyle =
    'p-2.5 h-11 hover:text-main-color hover:bg-[#1e4a47] hover:ease-in';
  const spanMenuStyle = 'ml-5 h-11';

  const [profileSelected, setProfileSelected] = useState(false);
  const profileListRef =
    useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLInputElement>;

  const handleClickOutside = (e: MouseEvent) =>
    !profileListRef?.current?.contains(e.target as HTMLElement) && setProfileSelected(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

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
        <div
          className='profile flex items-center relative cursor-pointer mr-6'
          ref={profileListRef}
        >
          <div
            className='main-profile flex items-center'
            onClick={() => setProfileSelected(!profileSelected)}
          >
            <img
              src={profile_pic1}
              alt='profile_pic'
              className={`${imgProfileStyle}`}
            />
            <span className=''>Nguyen Ngoc Minh Chau</span>
            <RiArrowDropDownLine className='text-3xl' />
          </div>
          {profileSelected && (
            <div className='options w-72 absolute top-14 right-1.5 rounded-sm bg-[#1e1e1e]'>
              <div className='other-users border-b border-[#707070]'>
                <div className='user h-20 flex items-center'>
                  <img
                    src={profile_pic2}
                    alt='profile_pic'
                    className={`${imgProfileStyle}`}
                  />
                  <span>Tran Huu Tinh</span>
                </div>
                <div className='user h-20 flex items-center'>
                  <img
                    src={profile_pic3}
                    alt='profile_pic'
                    className={`${imgProfileStyle}`}
                  />
                  <span>Pham Minh Duc</span>
                </div>
                <div className='user h-20 flex items-center'>
                  <img
                    src={profile_pic4}
                    alt='profile_pic'
                    className={`${imgProfileStyle}`}
                  />
                  <span>Nguyen Dinh Tuan</span>
                </div>
              </div>
              <div className='menu flex flex-col justify-center'>
                <Link
                  to={{ pathname: `/account` }}
                  className={`${linkMenuStyle}`}
                >
                  <span
                    onClick={() => setProfileSelected(false)}
                    className={`${spanMenuStyle}`}
                  >
                    Account
                  </span>
                </Link>
                <Link
                  to=''
                  className={`${linkMenuStyle}`}
                >
                  <span className={`${spanMenuStyle}`}>Help Center</span>
                </Link>
                <Link
                  to={{ pathname: `/login` }}
                  className={`${linkMenuStyle}`}
                >
                  <span
                    onClick={() => setProfileSelected(false)}
                    className={`${spanMenuStyle}`}
                  >
                    Log Out
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;

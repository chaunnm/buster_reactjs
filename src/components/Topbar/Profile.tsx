import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ClickOutside from './ClickOutside';

function Profile() {
  const profileItem = [
    { avatar: 'https://i.imgur.com/rMxA1X4.jpg', name: 'Nguyen Ngoc Minh Chau' },
    { avatar: 'https://i.imgur.com/vSMKJyr.jpg', name: 'Tran Huu Tinh' },
    { avatar: 'https://i.imgur.com/Vtxzzl8.png', name: 'Pham Minh Duc' },
    { avatar: 'https://i.imgur.com/q9EXLkU.jpg', name: 'Nguyen Dinh Tuan' },
  ];

  const menuItem = [
    { path: '/account', name: 'Account' },
    { path: '', name: 'Help Center' },
    { path: '/login', name: 'Log Out' },
  ];

  const imgProfileStyle = 'w-11 h-11 my-0 mx-5 rounded-full object-cover';

  const [profileSelected, setProfileSelected] = useState(false);

  return (
    <ClickOutside onClickOutside={() => setProfileSelected(false)}>
      <div className='profile flex items-center relative cursor-pointer mr-6'>
        <div
          className='main-profile flex items-center'
          onClick={() => setProfileSelected(!profileSelected)}
        >
          <img
            src={profileItem[0].avatar}
            alt='profile_pic'
            className={`${imgProfileStyle}`}
          />
          <span className=''>{profileItem[0].name}</span>
          <RiArrowDropDownLine className='text-3xl' />
        </div>
        {profileSelected && (
          <div className='options w-72 absolute top-14 right-1.5 rounded-sm bg-[#1e1e1e]'>
            <div className='other-users border-b border-[#707070]'>
              {profileItem.slice(1).map((user, index) => {
                return (
                  <div className='user h-20 flex items-center'>
                    <img
                      key={index}
                      src={user.avatar}
                      alt='profile_pic'
                      className={`${imgProfileStyle}`}
                    />
                    <span>{user.name}</span>
                  </div>
                );
              })}
            </div>
            <div className='menu flex flex-col justify-center'>
              {menuItem.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className='p-2.5 h-11 hover:text-main-color hover:bg-[#1e4a47] hover:ease-in'
                    onClick={item.path !== '' ? () => setProfileSelected(false) : undefined}
                  >
                    <span className='ml-5 h-11'>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </ClickOutside>
  );
}

export default Profile;

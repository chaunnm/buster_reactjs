type SettingItemProps = {
  settingTitle: string;
  settingDesc?: string;
};

function SettingItem({ settingTitle, settingDesc }: SettingItemProps) {
  return (
    <div className='flex justify-between mb-3'>
      <p className='leading-4'>
        <span className='text-[0.75rem]'>{settingTitle}</span> <br />
        <span className='text-[0.625rem] text-[#717171]'>{settingDesc}</span>
      </p>

      {/* Toggle Button */}
      <div className='flex items-center'>
        <label className='relative cursor-pointer'>
          <input
            type='checkbox'
            className='sr-only peer'
          />
          <div
            className='w-11 h-6 flex items-center bg-black rounded-full peer 
            peer-checked:after:translate-x-full after:absolute after:left-[2px]
           peer-checked:after:border-none peer-checked:after:bg-white after:bg-[#303030] after:border
          after:border-none after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:bg-[#1cd4d4]'
          ></div>
        </label>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className='settings flex justify-center bg-'>
      <div className='setting-container w-[90%] sm:w-[45%]'>
        <h1 className='mt-5 mb-3 text-2xl sm:text-4xl font-semibold text-center'>Settings</h1>
        <h2 className='text-base mb-2'>Notification</h2>
        <div className='sub-setting-container p-5 bg-[#1e1e1e] rounded-xl mb-4'>
          <h3 className='text-center mb-1'>Your movie</h3>
          <div className='setting-list'>
            <SettingItem
              settingTitle='Recommended Movie'
              settingDesc="Movie we find that you'll like"
            />

            <SettingItem
              settingTitle='New Movie'
              settingDesc='New movies from genres you like'
            />
            <SettingItem
              settingTitle='News Update'
              settingDesc='Get the hottest news everyday'
            />
          </div>
          <h3 className='text-center mb-1'>Buster Update</h3>
          <div className='setting-list'>
            <SettingItem
              settingTitle='Product News'
              settingDesc='New features and latest product update on Buster'
            />
            <SettingItem
              settingTitle='Deal and Offers'
              settingDesc='Promos and events for you'
            />
          </div>
        </div>

        <h2 className='mb-2'>Display Options</h2>
        <div className='sub-setting-container p-5 bg-[#1e1e1e] rounded-xl'>
          <div className='setting-list'>
            <SettingItem settingTitle='Language' />
            <SettingItem settingTitle='Font Size' />{' '}
            <SettingItem
              settingTitle='Toggle navigation'
              settingDesc='Navigation will auto hide after 10s'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

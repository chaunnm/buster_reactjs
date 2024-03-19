import { TabViewItem } from '.';
import { Episode, Season, TabProps } from '../../../interfaces';
import { EpisodeItem } from '../../TVEpisode';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow, RightArrow } from '../../../utils';

interface TabEpisodesProps extends TabProps {
  seasons: Season[] | undefined;
  episodes: Episode[] | undefined;
}

const TabEpisodes: React.FC<TabEpisodesProps> = ({
  seasons,
  episodes,
  activeTab,
  handleTabClick,
}) => {
  const settingsSlider = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {seasons && episodes && (
        <TabViewItem
          tab='episodes'
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          children={
            <div className='season h-[100%] relative mt-6'>
              <Slider {...settingsSlider}>
                {episodes &&
                  episodes.map((episode, index) => (
                    <EpisodeItem
                      key={index}
                      episodes={episode}
                    />
                  ))}
              </Slider>
            </div>
          }
        />
      )}
    </>
  );
};

export default TabEpisodes;

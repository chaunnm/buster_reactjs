import React, { useEffect, useState } from 'react';
import BannerItem from './BannerItem';
import { category } from '../../api/tmdbApi';
import movieListService from '../../services/movieList';
import Slider from 'react-slick';

const Banner: React.FC = () => {
  const [bannerList, setBannerList] = useState<[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchBannerList = async () => {
      const page = '1';
      const movieList = await movieListService.getTrendingList(category.all, page);
      setBannerList(movieList?.data.results.slice(0, 6)); //Get 6 items
    };
    fetchBannerList();
  }, []);

  return (
    <div className='banner'>
      <Slider {...settings}>
        {bannerList.map((item, i) => {
          return (
            <BannerItem
              key={i}
              item={item}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;

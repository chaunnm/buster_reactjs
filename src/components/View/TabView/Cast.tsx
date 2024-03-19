import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../../../utils';
import { tmdbApi } from '../../../api';
import { CastItem } from '.';
import { CastItemType } from '../../../interfaces';

const Cast = () => {
  const [cast, setCast] = useState<CastItemType[]>([]);
  const { category, id } = useParams<{ category: string; id: string }>();

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
    pauseOnHover: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 813,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  useEffect(() => {
    const fetchCast = async () => {
      const response = await tmdbApi.getCredits(category!, parseInt(id!, 10));
      const castTemp = response.data.cast.filter((item: CastItemType) => {
        if (item.profile_path && !item.character.toLowerCase().includes('uncredited')) return item;
      });
      setCast(castTemp);
    };

    fetchCast();
  }, [category, id]);

  return (
    <>
      {cast && cast.length > 0 && (
        <div className='casts mt-7'>
          <div className='casts-container block'>
            <h2 className='text-2xl bold mb-4 uppercase'>{`Cast (${cast.length})`}</h2>
            {cast && cast.length > 4 ? (
              <div className='casts-slider relative'>
                <Slider {...settings}>
                  {cast &&
                    cast.map((item, i) => (
                      <CastItem
                        key={i}
                        cast={item}
                      />
                    ))}
                </Slider>
              </div>
            ) : (
              <div className='casts-custom grid'>
                {cast &&
                  cast.map((item, i) => (
                    <CastItem
                      key={i}
                      cast={item}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cast;

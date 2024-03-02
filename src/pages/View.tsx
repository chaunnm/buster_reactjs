// import { TestView } from '../components/TestView';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig, embedMovie, embedTVEpisode, tmdbApi } from '../api';
import { IoAdd } from 'react-icons/io5';
import { Overview, Video } from '../components/View';

interface Genre {
  id: number;
  name: string;
}

interface OverviewType {
  episode_number?: number;
  name?: string;
  title?: string;
  first_air_date?: string;
  release_date?: string;
  air_date?: string;
  tagline?: string;
  overview?: string;
  genres?: Genre[];
  vote_average?: number;
  vote_count?: number;
}

interface OverviewProps {
  title: string;
  overview: OverviewType;
  all: boolean;
}

export type { Genre, OverviewProps };
function View() {
  const { category, id } = useParams();
  const [background, setBackground] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [seasons, setSeasons] = useState<number[]>([]);
  const [overview, setOverview] = useState<OverviewType>({});
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<OverviewType>({});
  console.log(background);

  const fetchMovie = async () => {
    if (category && id) {
      const params = {};
      const response = await tmdbApi.getDetails(category, parseInt(id, 10), { params });

      handleOverview(response);
      handleBackground(response);
      handleTitle(response);
      handleDetail(response);

      console.log(id);
    }
  };

  const handleOverview = (response: any) => {
    const data = response.data;
    if (category === 'tv') {
      setSeasons(data.seasons);
    }
    setOverview(data);
  };

  const handleBackground = (response: any) => {
    const data = response.data;
    const backgroundTemp = data.backdrop_path || data.poster_path;
    setBackground(backgroundTemp);
  };

  // Xử lý tiêu đề (title)
  const handleTitle = (response: any) => {
    const data = response.data;
    const titleTemp = data.title || data.name;
    document.title = `${titleTemp} - BUSTER`;
    setTitle(titleTemp);
  };

  const handleDetail = (response: any) => {
    setDetails(response.data);
  };

  // const fetchMovie = async () => {
  //   if (category && id) {
  //     const params = {};
  //     const response = await tmdbApi.getDetails(category, parseInt(id, 10), { params });
  //     if (category === 'tv') {
  //       setSeasons(response.data.seasons);
  //       setOverview(response.data);
  //     } else {
  //       setOverview(response.data);
  //     }
  //     const backgroundTemp = response.data.backdrop_path //TODO: divide the Handler
  //       ? response.data.backdrop_path
  //       : response.data.poster_path;
  //     setBackground(backgroundTemp);

  //     const titleTemp = response.data.title ? response.data.title : response.data.name;
  //     document.title = `${titleTemp} - BUSTER`;
  //     setTitle(titleTemp);
  //     console.log(id);
  //   }
  // };

  const handleUrl = (season: number = seasons[0], episode: any = overview) => {
    if (category === 'movie' && id) {
      setSrc(embedMovie(parseInt(id, 10)));
    } else {
      setOverview(episode);
      if (episode.episode_number && id) {
        setSrc(embedTVEpisode(parseInt(id, 10), season, episode.episode_number));
      } else if (id) {
        setSrc(embedTVEpisode(parseInt(id, 10), season, 1));
      }
    }
  };

  const fetchDetails = async () => {
    const params = {};
    if (category && id) {
      const response = await tmdbApi.getDetails(category, parseInt(id, 10), { params });
      setDetails(response.data);
    }
  };

  useEffect(() => {
    fetchMovie();
    handleUrl();
    fetchDetails();
  }, [id]);

  return (
    <div>
      <div
        className='view-top flex flex-2-3 justify-around bg-cover'
        style={{
          backgroundImage: `url(${apiConfig.originalImage(background)})`,
        }}
      >
        <div className='view-top-left p-6 md:p-12'>
          {/* Hoi */}
          {overview && (
            <Overview
              title={title}
              overview={overview}
              all={false}
            />
          )}

          <button className='add-btn text-sm text-[--main-color] mt-8 flex items-center justify-between border-[1px] border-[--main-color] p-1 md:p-2 rounded-[0.25rem]'>
            <IoAdd />
            <span className='  '>MY PLAYLIST</span>
          </button>
        </div>
        <div className='views-top-right p-8 h-max'>
          <Video src={src} />
        </div>
      </div>
      <div className='views-bot pt-5 pl-4'>
        <ul className='bot-more-title flex gap-4 items-start text-base '>
          <h4 className='more-title cursor-pointer'>SIMILAR</h4>
          <h4 className='more-title cursor-pointer'>DETAILS</h4>
        </ul>
        <div className='bot-more-content'>
          {/* {category && id && (
            <div className='more-content'>
              <TestMovieList
                category={category}
                type='similar'
                title=''
                id={parseInt(id, 10)}
                fire={false}
              />
            </div>
          )} */}
          <ul className='more-content text-xs sm:text-sm '>
            {details && (
              <Overview
                title=''
                overview={details}
                all={true}
              />
            )}
            {/* <Cast /> // create Cast Component */}
          </ul>
        </div>
      </div>
      {/* <TestView /> */}
    </div>
  );
}

export default View;

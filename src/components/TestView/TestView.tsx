import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig, embedMovie, embedTVEpisode, tmdbApi } from '../../api';
import { TestMovieList, Video } from '..';
import { Overview } from '.';
import { IoAdd } from 'react-icons/io5';

function TestView() {
  const { category, id } = useParams();
  const [background, setBackground] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [seasons, setSeasons] = useState<number[]>([]);
  const [overview, setOverview] = useState<any>({});
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<any>({});

  const fetchMovie = async () => {
    if (category && id) {
      const params = {};
      const response = await tmdbApi.getDetails(category, parseInt(id, 10), { params });
      if (category === 'tv') {
        setSeasons(response.data.seasons);
        setOverview(response.data);
      } else {
        setOverview(response.data);
      }
      const backgroundTemp = response.data.backdrop_path
        ? response.data.backdrop_path
        : response.data.poster_path;
      setBackground(backgroundTemp);

      const titleTemp = response.data.title ? response.data.title : response.data.name;
      document.title = `${titleTemp} - BUSTER`;
      setTitle(titleTemp);
    }
  };

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
    <div
      className='views'
      style={{
        backgroundImage: `url(${apiConfig.originalImage(background)})`,
      }}
    >
      <div className='views-top'>
        <div className='views-top-left'>
          <Overview
            title={title}
            overview={overview}
            all={false}
          />
          <button className='add-btn'>
            <IoAdd />
            <span>My Playlist</span>
          </button>
        </div>
        <div className='views-top-right'>
          <Video src={src} />
        </div>
      </div>
      <div className='views-bot'>
        <ul className='bot-more-title'>
          <h4 className='more-title'>SIMILAR</h4>
          <h4 className='more-title '>DETAILS</h4>
        </ul>
        <div className='bot-more-content'>
          {category && id && (
            <div className='more-content'>
              <TestMovieList
                category={category}
                type='similar'
                title=''
                id={parseInt(id, 10)}
                fire={false}
              />
            </div>
          )}
          <ul className='more-content'>
            <Overview
              title=''
              overview={details}
              all={true}
            />
            {/* <Cast /> // create Cast Component */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestView;

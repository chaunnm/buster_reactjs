import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig, tmdbApi } from '../../api';
import { TestMovieList, Video } from '..';
import { Overview, SeasonItem } from '.';
import { IoAdd } from 'react-icons/io5';
import EpisodeItem from '../TVEpisode/EpisodeItem';
import { getEmbedLinkMovie, getEmbedLinkTVEpisode } from '../../utils/embed-link';
import { Tab, TabView } from '../View/TabView/TabViewItem';
import { Episode, OverviewType, Season } from '../../interfaces';

function TestView() {
  const { category, id, season } = useParams();
  const [background, setBackground] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [seasons, setSeasons] = useState<Season[]>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [overview, setOverview] = useState<OverviewType>({});
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<OverviewType>({});
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
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

    const handleUrl = (season: number = 1, episode: any = overview) => {
      if (category === 'movie' && id) {
        setSrc(getEmbedLinkMovie(parseInt(id, 10)));
      } else {
        setOverview(episode);
        if (episode.episode_number && id) {
          setSrc(getEmbedLinkTVEpisode(parseInt(id, 10), season, episode.episode_number));
        } else if (id) {
          setSrc(getEmbedLinkTVEpisode(parseInt(id, 10), season, 1));
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

    const fetchEpisodes = async () => {
      if (id && season) {
        const response = await tmdbApi.getTVSeasons(parseInt(id, 10), parseInt(season, 10));
        setEpisodes(response.data.episodes);
      }
    };

    fetchMovie();
    handleUrl();
    fetchDetails();
    fetchEpisodes();
  }, [category, id, season, overview]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className='views'
      style={{
        backgroundImage: `url(${apiConfig.originalImage(background)})`,
      }}
    >
      <div className='views-top flex flex-row'>
        <div className='views-top-left flex-1 w-64'>
          {overview && episodes && (
            <Overview
              title={title}
              overview={overview}
              all={false}
            />
          )}
          <button className='add-btn'>
            <IoAdd />
            <span>My Playlist</span>
          </button>
        </div>
        <div className='views-top-right flex-1 w-32'>
          {category === 'movie' && <Video src={src} />}
        </div>
      </div>
      <div
        className='views-bot flex flex-row'
        onClick={() => window.scroll(0, 0)}
      >
        {details && (
          <TabView
            tab='details'
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            children={
              <>
                <Overview
                  title=''
                  overview={details}
                  all={true}
                />
                {/* <Cast /> // create Cast Component */}
              </>
            }
          />
        )}
        {seasons && (
          <TabView
            tab='episodes'
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            children={
              <div className='season flex'>
                {episodes &&
                  episodes.map((episode, index) => (
                    <EpisodeItem
                      key={index}
                      episodes={episode}
                    />
                  ))}
              </div>
            }
          />
        )}
        {seasons && (
          <TabView
            tab='seasons'
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            children={seasons.map((season, index) => (
              <SeasonItem
                key={index}
                seasons={season}
              />
            ))}
          />
        )}
        {category && id && (
          <TabView
            tab='similar'
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            children={
              <TestMovieList
                category={category}
                type='similar'
                title=''
                id={parseInt(id, 10)}
                fire={false}
              />
            }
          />
        )}
      </div>
    </div>
  );
}

export default TestView;

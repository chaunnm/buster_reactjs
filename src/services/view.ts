import { useEffect, useState } from 'react';
import { tmdbApi } from '../api';
import { getEmbedLinkMovie, getEmbedLinkTVEpisode } from '../utils/embed-link';
import { Tab } from '../components/View';
import { Episode, OverviewType, Season } from '../interfaces';

const useView = (category?: string, id?: string, season?: string) => {
  const [background, setBackground] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [seasons, setSeasons] = useState<Season[]>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [overview, setOverview] = useState<OverviewType>({});
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<OverviewType>({});
  const [activeTab, setActiveTab] = useState('details');

  const fetchMovie = async () => {
    if (category && id) {
      const params = {};
      const response = await tmdbApi.getDetails(category, parseInt(id, 10), { params });
      const data = response.data;

      handleOverview(data);
      handleBackground(data);
      handleTitle(data);
      handleDetail(data);
    }
  };

  const handleOverview = (data: any) => {
    if (category === 'tv') {
      setSeasons(data.seasons);
    }
    setOverview(data);
  };

  const handleBackground = (data: any) => {
    const backgroundTemp = data.backdrop_path || data.poster_path;
    setBackground(backgroundTemp);
  };

  const handleTitle = (data: any) => {
    const titleTemp = data.title || data.name;
    document.title = `${titleTemp} - BUSTER`;
    setTitle(titleTemp);
  };

  const handleDetail = (data: any) => {
    setDetails(data);
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

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const fetchEpisodes = async () => {
    if (id && season) {
      const response = await tmdbApi.getTVSeasons(parseInt(id, 10), parseInt(season, 10));
      setEpisodes(response.data.episodes);
    }
  };

  useEffect(() => {
    fetchMovie();
    handleUrl();
    fetchDetails();
    fetchEpisodes();
  }, [category, id, season]);

  return {
    background,
    src,
    seasons,
    episodes,
    overview,
    title,
    details,
    activeTab,
    handleTabClick,
    fetchMovie,
    handleUrl,
    fetchDetails,
    fetchEpisodes,
  };
};

export default useView;

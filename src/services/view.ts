/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { tmdbApi } from '../api';
import { Tab } from '../components/View';
import { Episode, OverviewType, Season } from '../interfaces';
import { getEmbedLinkMovie, getEmbedLinkTVEpisode } from '../utils';

const useView = (category?: string, id?: string, season?: string, episode?: string) => {
  const activeItem = category === 'movie' ? 'details' : season ? 'episodes' : 'seasons';

  const [background, setBackground] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [seasons, setSeasons] = useState<Season[]>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [overview, setOverview] = useState<OverviewType>({});
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<OverviewType>({});
  const [activeTab, setActiveTab] = useState(activeItem);

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

  const handleUrl = (season: string, episode: string) => {
    if (category === 'movie' && id) {
      setSrc(getEmbedLinkMovie(parseInt(id, 10)));
    } else {
      // setOverview(episode);
      if (season && episode && id) {
        setSrc(
          getEmbedLinkTVEpisode(parseInt(id, 10), parseInt(season, 10), parseInt(episode, 10)),
        );
      } else if (season && id) {
        setSrc(getEmbedLinkTVEpisode(parseInt(id, 10), parseInt(season, 10), 1));
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
    handleUrl(season!, episode!);
    fetchDetails();
    fetchEpisodes();
  }, [category, id, season, episode]);

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

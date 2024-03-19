/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
  all: 'all',
};

export const movieType = {
  trending: 'trending',
  now_playing: 'now_playing',
  popular: 'popular',
  top_rated: 'top_rated',
  upcoming: 'upcoming',
};

export const tvType = {
  trending: 'trending',
  airing_today: 'airing_today',
  on_the_air: 'on_the_air',
  popular: 'popular',
  top_rated: 'top_rated',
};

// export enum Category {
//   Movie = 'movie',
//   TV = 'tv',
//   All = 'all',
// }

// export enum MovieType {
//   Trending = 'trending',
//   NowPlaying = 'now_playing',
//   Popular = 'popular',
//   TopRated = 'top_rated',
//   Upcoming = 'upcoming',
// }

// export enum TVType {
//   Trending = 'trending',
//   AiringToday = 'airing_today',
//   OnTheAir = 'on_the_air',
//   Popular = 'popular',
//   TopRated = 'top_rated',
// }

const tmdbApi = {
  getTrendingList: (category: string, params: Record<string, any>) => {
    const url = `trending/${category}/week`;
    return axiosClient.get(url, params);
  },
  getMovieList: (type: string, params: Record<string, any>) => {
    const validType = movieType[type as keyof typeof movieType];
    const url = `movie/${validType}`;
    return axiosClient.get(url, params);
  },
  getMovieByGenre: (type: string, params: Record<string, any>) => {
    const url = `discover/${type}`;
    return axiosClient.get(url, params);
  },
  getTVList: (type: string, params: Record<string, any>) => {
    const validType = tvType[type as keyof typeof tvType];
    const url = `tv/${validType}`;
    return axiosClient.get(url, params);
  },
  getDetails: (cate: string, id: number, params: Record<string, any>) => {
    const url = `${category[cate as keyof typeof category]}/${id}`;
    return axiosClient.get(url, params);
  },
  getVideos: (cate: string, id: number) => {
    const url = `${category[cate as keyof typeof category]}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  discover: (cate: string, params: Record<string, any>) => {
    const url = `discover/${category[cate as keyof typeof category]}`;
    return axiosClient.get(url, params);
  },
  search: (cate: string, params: Record<string, any>) => {
    const search = { ...category, keyword: 'keyword' };
    const url = `search/${search[cate as keyof typeof search]}`;
    return axiosClient.get(url, params);
  },
  getCredits: (cate: string, id: number) => {
    const url = `${category[cate as keyof typeof category]}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  getReviews: (cate: string, id: number) => {
    const url = `${category[cate as keyof typeof category]}/${id}/reviews`;
    return axiosClient.get(url, { params: {} });
  },
  getSimilar: (cate: string, id: number) => {
    const url = `${category[cate as keyof typeof category]}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  },
  getGenres: (cate: string) => {
    const url = `genre/${category[cate as keyof typeof category]}/list`;
    return axiosClient.get(url, { params: {} });
  },
  // TV series by seasons and episodes
  getTVSeasons: (id: number, season_number: number) => {
    const url = `tv/${id}/season/${season_number}`;
    return axiosClient.get(url, { params: {} });
  },
  getTVSeasonsCredits: (id: number, season_number: number) => {
    const url = `${id}/season/${season_number}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  getTVEpisodes: (id: number, season_number: number, episode_number: number) => {
    const url = `tv/${id}/season/${season_number}/episode/${episode_number}`;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;

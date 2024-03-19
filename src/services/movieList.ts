import { tmdbApi } from '../api';
import { MovieListProps } from '../interfaces';

let response = null;
let params: Partial<Record<string, string>> = {};

const movieListService = {
  getTrendingList: async (category: string, page: string) => {
    try {
      params = { page: page };
      response = await tmdbApi.getTrendingList(category, { params });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getMovieByGenre: async (category: string, genreID: string) => {
    try {
      params = { with_genres: genreID };
      response = await tmdbApi.getMovieByGenre(category, { params });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getListByType: async (category: string, type: string) => {
    try {
      switch (category) {
        case 'movie':
          response = await tmdbApi.getMovieList(type, { params });
          break;
        default:
          response = await tmdbApi.getTVList(type, { params });
          break;
      }
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getSimilar: async (category: string, id: number) => {
    try {
      response = await tmdbApi.getSimilar(category, id);
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  discoverByGenre: async (category: string, props: MovieListProps) => {
    try {
      params = {
        with_genres: props.genre_id,
      };
      response = await tmdbApi.discover(category, { params });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getGenres: async (cate: string) => {
    try {
      const response = await tmdbApi.getGenres(cate);
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default movieListService;

interface Episode {
  air_date?: string;
  episode_number?: number;
  season_number?: number;
  name?: string;
  overview?: string;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

interface Season {
  air_date?: string;
  episode_count?: number;
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string;
  season_number?: number;
  vote_average?: number;
  episodes: Episode;
}

export type { Episode, Season };

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

  export type { Genre, OverviewType, OverviewProps };
import { Genre, Season } from '.';

interface OverviewType {
  name?: string;
  title?: string;
  first_air_date?: string;
  release_date?: string;
  air_date?: string;
  tagline?: string;
  overview?: string;
  genres?: Genre[];
  number_of_seasons?: number;
  seasons?: Season;
  vote_average?: number;
  vote_count?: number;
}

interface OverviewProps {
  title: string;
  overview: OverviewType;
}

type Tab = 'episodes' | 'seasons' | 'similar' | 'details';

interface TabProps {
  activeTab: string;
  handleTabClick: (tab: Tab) => void;
}

export type { OverviewType, OverviewProps, Tab, TabProps };

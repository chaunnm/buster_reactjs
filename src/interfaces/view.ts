import { Genre, Season } from '.';

interface OverviewType {
  name?: string;
  title?: string;
  tagline?: string;
  overview?: string;
  genres?: Genre[];
  number_of_seasons?: number;
  seasons?: Season;
}

interface OverviewProps {
  title: string;
  overview: OverviewType;
}

interface DetailsType {
  name?: string;
  title?: string;
  first_air_date?: string;
  release_date?: string;
  air_date?: string;
  overview?: string;
  number_of_seasons?: number;
  seasons?: Season;
  vote_average?: number;
  vote_count?: number;
}

interface DetailsProps {
  details: DetailsType;
}

type Tab = 'episodes' | 'seasons' | 'similar' | 'details';

interface TabProps {
  activeTab: string;
  handleTabClick: (tab: Tab) => void;
}

interface CastItemType {
  profile_path: string;
  name: string;
  character: string;
}

interface CastItemProps {
  cast: CastItemType;
}

export type {
  OverviewType,
  OverviewProps,
  DetailsType,
  DetailsProps,
  Tab,
  TabProps,
  CastItemType,
  CastItemProps,
};

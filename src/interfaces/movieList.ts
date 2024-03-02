interface MovieListItemProps {
  id: number;
  poster: string;
  movieName: string;
  releaseYear: number;
  rating: number;
  hrefPath: string;
}

interface MovieListProps {
  type: string;
  category: string;
  genre_id?: string;
  id?: number;
  title: string;
  fire: boolean;
}

export type { MovieListItemProps, MovieListProps };

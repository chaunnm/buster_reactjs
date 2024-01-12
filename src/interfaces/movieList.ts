interface MovieListItemProps {
  id: number;
  poster: string;
  movieName: string;
  releaseYear: number;
  rating: number;
  hrefPath: string;
}

interface MovieListProps {
  movieLists:
    | {
        id: number;
        poster: string;
        movieName: string;
        releaseYear: number;
        rating: number;
        hrefPath: string;
      }[]
    | null;
  title: string;
}

export type { MovieListItemProps, MovieListProps };

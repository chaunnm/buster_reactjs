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
  export default MovieListProps
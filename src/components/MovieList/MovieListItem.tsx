import { MovieListItemProps } from "../../interfaces";
// interface MovieListItemProp {
//   id: number;
//   poster: string;
//   movieName: string;
//   releaseYear: number;
//   rating: number;
//   hrefPath: string
// }

const MovieListItem: React.FC<MovieListItemProps> = ({ ...props }) => {
  return (
    <div className="movie-list-item">
      <div className="wrapped-img">
        <img src={props.poster} alt="movie-img" />
        <a href={props.hrefPath}>
          <div className="play-btn-outer">
            <div className="play-btn"></div>
          </div>
        </a>
      </div>
      <div className="item-title">{props.movieName}</div>
      <div className="details">
        {props.releaseYear} - {props.rating}{' '}
        <img src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
      </div>
    </div>
  );
};

export default MovieListItem;
